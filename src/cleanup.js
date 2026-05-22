import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'components');

function cleanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            cleanDirectory(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            const basename = path.basename(fullPath, ext);
            const parentDirName = path.basename(dir).toLowerCase();
            
            // Delete style, image, and svg files
            if (['.css', '.scss', '.svg', '.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
                console.log(`Deleting ${fullPath}`);
                fs.unlinkSync(fullPath);
            } 
            // Rewrite .astro, .jsx, .tsx files
            else if (['.astro'].includes(ext)) {
                console.log(`Rewriting ${fullPath}`);
                let prefix = '';
                if (fullPath.includes('\\atoms\\') || fullPath.includes('/atoms/')) {
                    prefix = 'a-';
                } else if (fullPath.includes('\\molecules\\') || fullPath.includes('/molecules/')) {
                    prefix = 'm-';
                } else if (fullPath.includes('\\organism\\') || fullPath.includes('/organism/') || fullPath.includes('\\organisms\\') || fullPath.includes('/organisms/')) {
                    prefix = 'o-';
                }
                const className = `${prefix}${basename.toLowerCase()}`;
                const boilerplate = `---
// Component: ${basename}
// Props can be defined here
const { data } = Astro.props;
---

<div class="${className}">
  <h1>${basename} Component</h1>
  <!-- Boilerplate for ${basename} -->
  { data && <pre>{JSON.stringify(data, null, 2)}</pre> }
</div>
`;
                fs.writeFileSync(fullPath, boilerplate, 'utf8');
            } else if (['.jsx', '.tsx'].includes(ext)) {
                console.log(`Rewriting ${fullPath}`);
                let prefix = '';
                if (fullPath.includes('\\atoms\\') || fullPath.includes('/atoms/')) {
                    prefix = 'a-';
                } else if (fullPath.includes('\\molecules\\') || fullPath.includes('/molecules/')) {
                    prefix = 'm-';
                } else if (fullPath.includes('\\organism\\') || fullPath.includes('/organism/') || fullPath.includes('\\organisms\\') || fullPath.includes('/organisms/')) {
                    prefix = 'o-';
                }
                const className = `${prefix}${basename.toLowerCase()}`;
                const boilerplate = `import React from 'react';

// Component: ${basename}
const ${basename} = ({ data }) => {
  return (
    <div className="${className}">
      <h1>${basename} Component</h1>
      {/* Boilerplate for ${basename} */}
      { data && <pre>{JSON.stringify(data, null, 2)}</pre> }
    </div>
  );
};

export default ${basename};
`;
                fs.writeFileSync(fullPath, boilerplate, 'utf8');
            } else {
                console.log(`Skipping unknown file type ${fullPath}`);
            }
        }
    }
}

cleanDirectory(srcDir);
console.log('Component cleanup complete.');
