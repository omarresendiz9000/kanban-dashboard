# User Stories

## Epic 1 - Kanban Board

### US-001 - View Kanban Board

As a user,  
I want to view the Kanban board,  
so that I can understand the current state of work.

#### Acceptance Criteria

Given that I open the application  
When the Kanban board loads  
Then I shall see the following columns:

- Backlog
- Ready
- In Progress
- Review
- Done

---

### US-002 - View Work Items

As a user,  
I want to see work items inside their corresponding Kanban columns,  
so that I can understand what work exists in each workflow stage.

#### Acceptance Criteria

Given that work items exist  
When the board is displayed  
Then each work item shall appear in its corresponding status column.

Each work item card should initially display:

- Title
- Priority
- Assignee

---

## Epic 2 - Work Item Management

### US-003 - Create Work Item

As a user,  
I want to create a work item,  
so that I can add new work to the Kanban board.

#### Acceptance Criteria

Given that I am viewing the board  
When I select the option to create a work item  
Then I shall be able to enter:

- Title
- Description
- Priority
- Assignee
- Status

And when I save the work item  
Then the new work item shall appear on the Kanban board.

---

### US-004 - Edit Work Item

As a user,  
I want to edit an existing work item,  
so that I can keep its information accurate.

#### Acceptance Criteria

Given that a work item exists  
When I open the work item  
And modify its information  
And save the changes  
Then the updated information shall be displayed on the board.

---

### US-005 - Delete Work Item

As a user,  
I want to delete a work item,  
so that obsolete work can be removed from the board.

#### Acceptance Criteria

Given that a work item exists  
When I choose to delete it  
Then the system shall request confirmation.

When I confirm the deletion  
Then the work item shall no longer appear on the board.

---

## Epic 3 - Workflow Management

### US-006 - Move Work Item

As a user,  
I want to move a work item between workflow columns,  
so that the board reflects the current state of the work.

#### Acceptance Criteria

Given that a work item exists in a column  
When I drag the work item into another column  
Then the work item shall appear in the destination column.

The work item's status shall match the destination column.

---

### US-007 - Reorder Work Items

As a user,  
I want to reorder work items within a column,  
so that I can visually prioritize work.

#### Acceptance Criteria

Given that multiple work items exist in the same column  
When I drag one work item above or below another  
Then the new order shall be reflected on the board.

---

## Epic 4 - Priority Management

### US-008 - Set Work Item Priority

As a user,  
I want to assign a priority to a work item,  
so that important work can be identified quickly.

#### Acceptance Criteria

The system shall support:

- Critical
- High
- Medium
- Low

The priority shall be visible on the work item card.

---

## Epic 5 - Kanban Flow Management

### US-009 - Configure WIP Limit

As a manager,  
I want to configure a Work In Progress limit for a column,  
so that excessive work is not started simultaneously.

#### Acceptance Criteria

Given that a Kanban column has a configured WIP limit  
When the number of work items reaches that limit  
Then the board shall visually indicate that the limit has been reached.

---

### US-010 - Identify Blocked Work

As a user,  
I want to mark a work item as blocked,  
so that impediments are visible to the team.

#### Acceptance Criteria

Given that I edit a work item  
When I mark it as blocked  
Then I shall provide a blocker reason.

The blocked state shall be visually identifiable on the board.

---

## Epic 6 - Search and Filtering

### US-011 - Search Work Items

As a user,  
I want to search for work items,  
so that I can quickly find specific work.

#### Acceptance Criteria

The search shall support:

- Work item ID
- Title
- Description

---

### US-012 - Filter Work Items

As a user,  
I want to filter work items,  
so that I can focus on relevant work.

#### Acceptance Criteria

The system shall eventually allow filtering by:

- Status
- Priority
- Assignee
- Label

---

## Epic 7 - Dashboard Analytics

### US-013 - View Work Summary

As a user,  
I want to see a summary of current work,  
so that I can quickly understand the state of the board.

#### Acceptance Criteria

The dashboard shall display:

- Total work items
- Backlog items
- Work in progress
- Blocked items
- Completed items

---

### US-014 - View Cycle Time

As a manager,  
I want to see average cycle time,  
so that I can understand how quickly work is completed.

---

### US-015 - View Throughput

As a manager,  
I want to see throughput,  
so that I can understand how much work is being completed over time.

---

### US-016 - Identify Aging Work

As a manager,  
I want to identify work items that have remained active for too long,  
so that I can investigate potential blockers or bottlenecks.

---

# MVP User Stories

The first MVP shall focus on:

- US-001 - View Kanban Board
- US-002 - View Work Items
- US-003 - Create Work Item
- US-004 - Edit Work Item
- US-005 - Delete Work Item
- US-006 - Move Work Item
- US-008 - Set Work Item Priority

The remaining stories will be implemented incrementally.