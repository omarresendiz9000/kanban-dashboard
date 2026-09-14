# System Context

## 1. Purpose

This document describes the high-level system context for the Kanban Dashboard.

The Kanban Dashboard is a web application that allows users to create, manage, visualize, and analyze work using a Kanban workflow.

---

## 2. Primary Users

### Team Member

Uses the application to:

- View the Kanban board
- Create work items
- Update work items
- Move work items
- Set priorities
- Identify blocked work

### Manager

Uses the application to:

- Monitor work progress
- Review Work In Progress
- Identify blockers
- Review cycle time
- Review throughput
- Identify aging work
- Identify workflow bottlenecks

### Administrator

Will eventually manage:

- Users
- Roles
- Permissions
- Board configuration
- Workflow configuration

Administration functionality is outside the initial MVP.

---

## 3. System Boundary

The Kanban Dashboard will contain the functionality required to:

- Manage Kanban boards
- Manage work items
- Manage workflow states
- Store work item data
- Apply Kanban business rules
- Calculate workflow metrics
- Provide dashboard analytics

---

## 4. System Context Diagram

```mermaid
flowchart LR

    TeamMember[Team Member]
    Manager[Manager]
    Administrator[Administrator]

    Kanban["Kanban Dashboard"]

    TeamMember -->|Creates and manages work| Kanban
    Manager -->|Monitors flow and analytics| Kanban
    Administrator -->|Configures users and workflows| Kanban