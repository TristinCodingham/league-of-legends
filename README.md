# React Project Boilerplate

## Encapsulated with Presentation & State separated

## Folder structure example:

-- src/
    -- assets/
        -- docs/
        -- fonts/
        -- images/
        -- audio/
        -- video/
    -- components/
        -- Header/
        -- Footer/
        -- App/ <!-- Renders routes -->
    -- routes/
        -- Home/
        -- Error/
    -- utils/
        -- hooks/
        -- middleware/
        -- file.js
    -- index.js <!-- Renders components/App -->
    -- theme.js

## File structure example:

-- Folder/
     -- File.js <!-- JSX Component -->
     -- File.state.js <!-- Data -->
     -- File.style.js <!--( styled-components || File.style.css )-->
     -- File.test.js
-- Home/
     -- Home.js
     -- Home.state.js
     -- Home.style.js <!--( styled-components || Home.style.css )-->
     -- Home.test.js

### Naming files as 'index.js' can become confusing, avoid this by naming the file using the folder name.