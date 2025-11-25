# **Portal Modernization POC — README**

## **Overview**

This Proof of Concept (POC) demonstrates the future architecture of the Student Portal as part of the *WU Visual Refresh* initiative. The goal is to move away from the current CDN‑based Single‑SPA + Angular setup and transition into a fully integrated Angular-hosted microapp architecture, supported by a standardized NestJS backend.

This approach strengthens the portal’s structure, eliminates fragile DOM manipulation patterns, and ensures long‑term maintainability, scalability, and performance.

---

## **Objectives**

### **Frontend Modernization**

* Replace CDN-hosted Single‑SPA runtime with an **Angular-managed microfrontend shell**.
* Eliminate dependency on index.html DOM manipulation to render microapps.
* Improve microapp integration, routing, state handling, and cross‑microapp communication.
* Ensure layouts and UI components align with the Visual Refresh (Figma) direction.
* Provide a cleaner, testable, version‑controlled frontend architecture.

### **Backend Modernization**

* Migrate from the current JavaScript Express API (unstructured, inconsistent) into a **standardized NestJS codebase**.
* Introduce consistent module boundaries, DTOs, interceptors, guards, and logging.
* Improve API observability, testing, request validation, and long‑term governance.
* Enable future expansion of backend services across PODs.

---

## **Architecture Vision**

### **Current State**

* Angular microapps deployed individually to GCP.
* Single‑SPA loaded via CDN, pulling remote microapps via URL mapping.
* Heavy reliance on DOM manipulation and runtime script injection.
* Express backend without strong conventions or architectural structure.

### **Target State**

#### **Frontend**

* Angular serves as the primary shell application.
* Microapps integrated via Angular builders, custom module loaders, or controlled Single‑SPA wrappers (local runtime).
* Strong typing and shared libraries for:

  * design system
  * event bus
  * analytics
  * shared services
  * utilities and models
* Cleaner SSR/SSG compatibility path.

#### **Backend**

* NestJS monorepo or modular architecture.
* Standardized controllers, services, modules.
* Centralized logging (GCP), error handling, validation pipelines.
* Forward-compatible with microservice expansion.

---

## **POC Scope**

This POC validates:

* New Angular-based microapp hosting (no CDN).
* Integration of multiple microapps in Screens 1–5.
* Cross-microapp event flow and shared services.
* GA/Analytics tagging within the new architecture.
* Communication between frontend microapps and NestJS API.
* Updated build and deployment pipeline strategies.

---

## **Repository Structure (Proposed)**

```
root
 ├── frontend/
 │    ├── portal-shell/        # Main Angular shell
 │    ├── microapps/           # All microapps
 │    │    ├── student-info/
 │    │    ├── registration/
 │    │    └── ...
 │    ├── libs/                # Shared libraries
 │    │    ├── ui-components/
 │    │    ├── analytics/
 │    │    └── event-bus/
 │    └── tools/
 │
 └── backend/
      ├── api/                 # NestJS application
      ├── modules/
      ├── common/
      └── config/
```

---

## **How to Run (POC)**

### **Frontend**

```
cd frontend/portal-shell
npm install
npm start
```

Microapps should load locally without CDN involvement.

### **Backend**

```
cd backend/api
npm install
npm run start:dev
```

NestJS API becomes available at the configured local port.

---

## **Key Improvements Expected**

* **No more CDN dependency** → improved reliability & release control.
* **Cleaner microapp integration** → no DOM hacks.
* **Better analytics structure** → predictable event tracking.
* **Consistent backend structure** → easier maintenance & onboarding.
* **Modernized architecture** → scalable for new features and PODs.

---

## **Next Steps After POC**

* Finalize architectural decision document.
* Publish cross‑microapp dependency matrix.
* Refactor selected microapps into the new structure.
* Migrate Express endpoints into NestJS modules.
* Update ADO pipelines for new frontend/backend workflows.

---

## **Contacts / Ownership**

* **Tech Lead:** (Add Name)
* **POD:** (Add POD)
* **Architectural Reviewers:** (Add Stakeholders)

---

If additional sections are needed (diagram embeds, ADRs, API samples), they can be added in future revisions.
