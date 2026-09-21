"use client";

import { useCallback, useEffect, useState } from "react";
import { Building2, Pencil, Plus, RefreshCw, Save, Trash2, UserRound } from "lucide-react";
import { usePreferences } from "@/components/AppProviders";
import styles from "@/styles/pages/Admin.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
const emptyOwner = { ownerType: "INDIVIDUAL", phone: "", email: "", firstName: "", lastName: "", middleName: "", companyName: "", taxId: "", registrationNumber: "" };
const emptyProperty = { title: "", description: "", address: "", area: "", rooms: "", price: "", type: "RESIDENTIAL", ownerId: "", agentId: "", imageUrls: [] };

async function api(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    credentials: "include",
    cache: "no-store",
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  const payload = response.status === 204 ? null : await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.message || "Request failed.");
  return payload;
}

function ownerName(owner) {
  if (owner.ownerType === "COMPANY") return owner.companyName || "—";
  return [owner.lastName, owner.firstName, owner.middleName].filter(Boolean).join(" ") || "—";
}

export default function AdminManagement() {
  const { t } = usePreferences();
  const [resources, setResources] = useState({ status: "loading", owners: [], agents: [], properties: [], error: "" });
  const [ownerForm, setOwnerForm] = useState(emptyOwner);
  const [propertyForm, setPropertyForm] = useState(emptyProperty);
  const [editingOwner, setEditingOwner] = useState(null);
  const [editingProperty, setEditingProperty] = useState(null);
  const [formState, setFormState] = useState({ busy: "", error: "", notice: "" });

  const load = useCallback(async () => {
    setResources(current => ({ ...current, status: "loading", error: "" }));
    try {
      const [owners, agents, properties] = await Promise.all([
        api("/api/v1/owners"),
        api("/api/v1/users?role=AGENT"),
        api("/api/v1/properties/get-all"),
      ]);
      setResources({ status: "ready", owners, agents, properties, error: "" });
    } catch (error) {
      setResources(current => ({ ...current, status: "error", error: error.message }));
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  function updateOwner(name, value) { setOwnerForm(current => ({ ...current, [name]: value })); }
  function updateProperty(name, value) { setPropertyForm(current => ({ ...current, [name]: value })); }
  function resetOwner() { setOwnerForm(emptyOwner); setEditingOwner(null); setFormState({ busy: "", error: "", notice: "" }); }
  function resetProperty() { setPropertyForm(emptyProperty); setEditingProperty(null); setFormState({ busy: "", error: "", notice: "" }); }

  async function submitOwner(event) {
    event.preventDefault();
    setFormState({ busy: "owner", error: "", notice: "" });
    try {
      await api(`/api/v1/owners${editingOwner ? `/${editingOwner}` : ""}`, {
        method: editingOwner ? "PUT" : "POST",
        body: JSON.stringify(ownerForm),
      });
      setOwnerForm(emptyOwner);
      setEditingOwner(null);
      setFormState({ busy: "", error: "", notice: t("admin.saved") });
      await load();
    } catch (error) {
      setFormState({ busy: "", error: error.message, notice: "" });
    }
  }

  async function submitProperty(event) {
    event.preventDefault();
    setFormState({ busy: "property", error: "", notice: "" });
    const payload = {
      ...propertyForm,
      ownerId: Number(propertyForm.ownerId),
      agentId: propertyForm.agentId ? Number(propertyForm.agentId) : null,
      area: propertyForm.area === "" ? null : Number(propertyForm.area),
      rooms: propertyForm.rooms === "" ? null : Number(propertyForm.rooms),
      price: propertyForm.price === "" ? null : Number(propertyForm.price),
    };
    try {
      await api(`/api/v1/properties${editingProperty ? `/${editingProperty}` : ""}`, {
        method: editingProperty ? "PUT" : "POST",
        body: JSON.stringify(payload),
      });
      setPropertyForm(emptyProperty);
      setEditingProperty(null);
      setFormState({ busy: "", error: "", notice: t("admin.saved") });
      await load();
    } catch (error) {
      setFormState({ busy: "", error: error.message, notice: "" });
    }
  }

  function editOwner(owner) {
    setEditingOwner(owner.id);
    setOwnerForm({ ...emptyOwner, ...owner, phone: owner.phone || "", email: owner.email || "", firstName: owner.firstName || "", lastName: owner.lastName || "", middleName: owner.middleName || "", companyName: owner.companyName || "", taxId: owner.taxId || "", registrationNumber: owner.registrationNumber || "" });
    setFormState({ busy: "", error: "", notice: "" });
  }

  function editProperty(property) {
    setEditingProperty(property.id);
    setPropertyForm({
      ...emptyProperty, ...property,
      title: property.title || "", description: property.description || "", area: property.area ?? "",
      rooms: property.rooms ?? "", price: property.price ?? "", ownerId: String(property.owner?.id || ""),
      agentId: String(property.agent?.id || ""), imageUrls: property.imageUrls || [],
    });
    setFormState({ busy: "", error: "", notice: "" });
  }

  async function remove(path) {
    if (!window.confirm(t("admin.confirmDelete"))) return;
    setFormState({ busy: "delete", error: "", notice: "" });
    try {
      await api(path, { method: "DELETE" });
      setFormState({ busy: "", error: "", notice: t("admin.deleted") });
      await load();
    } catch (error) {
      setFormState({ busy: "", error: error.message, notice: "" });
    }
  }

  return <section className={styles.management} aria-labelledby="management-title">
    <div className={styles.managementHeading}>
      <div><p className={styles.eyebrow}>{t("admin.managementEyebrow")}</p><h2 id="management-title">{t("admin.management")}</h2></div>
      <button type="button" className={styles.iconButton} onClick={load} aria-label={t("catalog.tryAgain")}><RefreshCw size={17} /></button>
    </div>

    {resources.status === "loading" ? <div className={styles.managementLoading} role="status">{t("admin.resourcesLoading")}</div>
      : resources.status === "error" ? <div className={styles.inlineError} role="alert">{resources.error}<button type="button" onClick={load}>{t("catalog.tryAgain")}</button></div>
      : <div className={styles.managementGrid}>
        <article className={styles.panel}>
          <div className={styles.panelHeading}><div><p className={styles.eyebrow}>{t("admin.ownerDirectory")}</p><h3>{t("admin.owners")}</h3></div><span className={styles.requestCount}>{resources.owners.length}</span></div>
          <form className={styles.managementForm} onSubmit={submitOwner}>
            <label><span>{t("admin.ownerType")}</span><select value={ownerForm.ownerType} onChange={event => updateOwner("ownerType", event.target.value)} required><option value="INDIVIDUAL">{t("admin.individual")}</option><option value="COMPANY">{t("admin.company")}</option></select></label>
            {ownerForm.ownerType === "INDIVIDUAL" ? <div className={styles.formRow}>
              <label><span>{t("admin.firstName")}</span><input value={ownerForm.firstName} onChange={event => updateOwner("firstName", event.target.value)} required /></label>
              <label><span>{t("admin.lastName")}</span><input value={ownerForm.lastName} onChange={event => updateOwner("lastName", event.target.value)} required /></label>
              <label><span>{t("admin.middleName")}</span><input value={ownerForm.middleName} onChange={event => updateOwner("middleName", event.target.value)} /></label>
            </div> : <div className={styles.formRow}>
              <label><span>{t("admin.companyName")}</span><input value={ownerForm.companyName} onChange={event => updateOwner("companyName", event.target.value)} required /></label>
              <label><span>{t("admin.taxId")}</span><input value={ownerForm.taxId} onChange={event => updateOwner("taxId", event.target.value)} /></label>
              <label><span>{t("admin.registrationNumber")}</span><input value={ownerForm.registrationNumber} onChange={event => updateOwner("registrationNumber", event.target.value)} /></label>
            </div>}
            <div className={styles.formRow}><label><span>{t("auth.email")}</span><input type="email" value={ownerForm.email} onChange={event => updateOwner("email", event.target.value)} /></label><label><span>{t("admin.phone")}</span><input value={ownerForm.phone} onChange={event => updateOwner("phone", event.target.value)} /></label></div>
            <div className={styles.formActions}><button className={styles.primary} disabled={formState.busy === "owner"}>{editingOwner ? <Save size={16} /> : <Plus size={16} />}{editingOwner ? t("admin.updateOwner") : t("admin.addOwner")}</button>{editingOwner && <button type="button" className={styles.secondary} onClick={resetOwner}>{t("catalog.reset")}</button>}</div>
          </form>
          {resources.owners.length === 0 ? <div className={styles.empty}><UserRound size={28} /><p>{t("admin.noOwners")}</p></div> : <div className={styles.managementList}>{resources.owners.map(owner => <div key={owner.id} className={styles.managementItem}><div><strong>{ownerName(owner)}</strong><span>{t(`admin.ownerType.${owner.ownerType}`)} · {owner.email || owner.phone || t("property.notProvided")}</span></div><span>{owner.propertyCount}</span><button type="button" onClick={() => editOwner(owner)} aria-label={t("admin.edit")}><Pencil size={15} /></button><button type="button" onClick={() => remove(`/api/v1/owners/${owner.id}`)} aria-label={t("admin.delete")}><Trash2 size={15} /></button></div>)}</div>}
        </article>

        <article className={styles.panel}>
          <div className={styles.panelHeading}><div><p className={styles.eyebrow}>{t("admin.inventory")}</p><h3>{t("admin.propertyManagement")}</h3></div><span className={styles.requestCount}>{resources.properties.length}</span></div>
          <form className={styles.managementForm} onSubmit={submitProperty}>
            <div className={styles.formRow}><label><span>{t("admin.propertyTitle")}</span><input value={propertyForm.title} onChange={event => updateProperty("title", event.target.value)} /></label><label><span>{t("admin.address")}</span><input value={propertyForm.address} onChange={event => updateProperty("address", event.target.value)} required /></label></div>
            <div className={styles.formRow}><label><span>{t("property.type")}</span><select value={propertyForm.type} onChange={event => updateProperty("type", event.target.value)}><option value="RESIDENTIAL">{t("property.RESIDENTIAL")}</option><option value="NONRESIDENTIAL">{t("property.NONRESIDENTIAL")}</option><option value="COMMERCIAL">{t("property.COMMERCIAL")}</option></select></label><label><span>{t("admin.owner")}</span><select value={propertyForm.ownerId} onChange={event => updateProperty("ownerId", event.target.value)} required><option value="">{t("admin.chooseOwner")}</option>{resources.owners.map(owner => <option key={owner.id} value={owner.id}>{ownerName(owner)}</option>)}</select></label><label><span>{t("admin.agent")}</span><select value={propertyForm.agentId} onChange={event => updateProperty("agentId", event.target.value)}><option value="">{t("admin.unassigned")}</option>{resources.agents.map(agent => <option key={agent.id} value={agent.id}>{agent.username}</option>)}</select></label></div>
            <div className={styles.formRow}><label><span>{t("property.area")}</span><input type="number" min="0" step="0.1" value={propertyForm.area} onChange={event => updateProperty("area", event.target.value)} /></label><label><span>{t("property.rooms")}</span><input type="number" min="0" value={propertyForm.rooms} onChange={event => updateProperty("rooms", event.target.value)} /></label><label><span>{t("property.price")}</span><input type="number" min="0" step="0.01" value={propertyForm.price} onChange={event => updateProperty("price", event.target.value)} /></label></div>
            <label><span>{t("property.about")}</span><textarea rows="3" value={propertyForm.description} onChange={event => updateProperty("description", event.target.value)} /></label>
            <div className={styles.formActions}><button className={styles.primary} disabled={formState.busy === "property" || resources.owners.length === 0}>{editingProperty ? <Save size={16} /> : <Plus size={16} />}{editingProperty ? t("admin.updateProperty") : t("admin.addProperty")}</button>{editingProperty && <button type="button" className={styles.secondary} onClick={resetProperty}>{t("catalog.reset")}</button>}</div>
          </form>
          {resources.properties.length === 0 ? <div className={styles.empty}><Building2 size={28} /><p>{t("catalog.empty")}</p></div> : <div className={styles.managementList}>{resources.properties.map(property => <div key={property.id} className={styles.managementItem}><div><strong>{property.title || property.address}</strong><span>{property.owner?.displayName || t("admin.ownerMissing")} · {property.agent?.username || t("admin.unassigned")}</span></div><button type="button" onClick={() => editProperty(property)} aria-label={t("admin.edit")}><Pencil size={15} /></button><button type="button" onClick={() => remove(`/api/v1/properties/${property.id}`)} aria-label={t("admin.delete")}><Trash2 size={15} /></button></div>)}</div>}
        </article>
      </div>}
    {(formState.error || formState.notice) && <p className={formState.error ? styles.formError : styles.formNotice} role={formState.error ? "alert" : "status"}>{formState.error || formState.notice}</p>}
  </section>;
}
