```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser: Starting on the page

    browser->>server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP 201 (created)
    deactivate server
```