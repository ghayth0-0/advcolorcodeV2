// Minecraft color mapping & formatting codes
const minecraftColors = {
    '0': { hex: '#000000', code: '0' }, '1': { hex: '#0000AA', code: '1' },
    '2': { hex: '#00AA00', code: '2' }, '3': { hex: '#00AAAA', code: '3' },
    '4': { hex: '#AA0000', code: '4' }, '5': { hex: '#AA00AA', code: '5' },
    '6': { hex: '#FFAA00', code: '6' }, '7': { hex: '#AAAAAA', code: '7' },
    '8': { hex: '#555555', code: '8' }, '9': { hex: '#5555FF', code: '9' },
    'a': { hex: '#55FF55', code: 'a' }, 'b': { hex: '#55FFFF', code: 'b' },
    'c': { hex: '#FF5555', code: 'c' }, 'd': { hex: '#FF55FF', code: 'd' },
    'e': { hex: '#FFFF55', code: 'e' }, 'f': { hex: '#FFFFFF', code: 'f' }
  };
  const minecraftFormatting = {
      bold: 'l',
      italic: 'o',
      underline: 'n',
      strikethrough: 'm',
      reset: 'r' // Important to reset formatting
  };
  
  // Discord ANSI color mapping (simplified - maps hex to closest ANSI basic color)
  // Full 256 or truecolor support is complex and not universally supported
  const discordAnsiMap = {
      '#000000': 30, '#AA0000': 31, '#00AA00': 32, '#FFAA00': 33, // Adjusted brown/yellow
      '#0000AA': 34, '#AA00AA': 35, '#00AAAA': 36, '#AAAAAA': 37,
      '#555555': 90, '#FF5555': 91, '#55FF55': 92, '#FFFF55': 93,
      '#5555FF': 94, '#FF55FF': 95, '#55FFFF': 96, '#FFFFFF': 97
  };
  const discordFormatting = { // ANSI codes
      bold: 1,
      italic: 3, // Not standard ANSI, often unsupported
      underline: 4,
      strikethrough: 9 // Not standard ANSI, often unsupported
  };
  
  // BBCode doesn't have direct formatting like strikethrough/underline widely supported with color
  const bbCodeFormatting = {
      bold: ['[b]', '[/b]'],
      italic: ['[i]', '[/i]'],
      // Underline/Strikethrough often omitted or use [u]/[s] if supported by specific forum
  };
  
  // Color presets (expanded)
  const colorPresets = {
      'red-blue': ['#FF0000', '#0000FF'],
      'blue-red': ['#0000FF', '#FF0000'],
      'red-green': ['#FF0000', '#00FF00'],
      'green-red': ['#00FF00', '#FF0000'],
      'red-yellow': ['#FF0000', '#FFFF00'],
      'yellow-red': ['#FFFF00', '#FF0000'],
      'blue-yellow': ['#0000FF', '#FFFF00'],
      'yellow-blue': ['#FFFF00', '#0000FF'],
      'purple-green': ['#800080', '#00FF00'],
      'green-purple': ['#00FF00', '#800080'],
      'orange-blue': ['#FFA500', '#0000FF'],
      'blue-orange': ['#0000FF', '#FFA500'],
      'cyan-magenta': ['#00FFFF', '#FF00FF'],
      'magenta-cyan': ['#FF00FF', '#00FFFF'],
      'lime-purple': ['#32CD32', '#800080'],
      'purple-lime': ['#800080', '#32CD32'],
      'pink-blue': ['#FF69B4', '#0000FF'],
      'blue-pink': ['#0000FF', '#FF69B4'],
      'turquoise-coral': ['#40E0D0', '#FF7F50'],
      'coral-turquoise': ['#FF7F50', '#40E0D0'],
      'indigo-yellow': ['#4B0082', '#FFFF00'],
      'yellow-indigo': ['#FFFF00', '#4B0082'],
      'maroon-aqua': ['#800000', '#00FFFF'],
      'aqua-maroon': ['#00FFFF', '#800000'],
      'violet-orange': ['#8A2BE2', '#FFA500'],
      'orange-violet': ['#FFA500', '#8A2BE2'],
      'crimson-teal': ['#DC143C', '#008080'],
      'teal-crimson': ['#008080', '#DC143C'],
      'brown-skyblue': ['#A52A2A', '#87CEEB'],
      'skyblue-brown': ['#87CEEB', '#A52A2A'],
      'black-white': ['#000000', '#FFFFFF'],
      'white-black': ['#FFFFFF', '#000000'],
      'navy-gold': ['#000080', '#FFD700'],
      'gold-navy': ['#FFD700', '#000080'],
      'olive-fuchsia': ['#808000', '#FF00FF'],
      'fuchsia-olive': ['#FF00FF', '#808000'],
      'silver-charcoal': ['#C0C0C0', '#36454F'],
      'charcoal-silver': ['#36454F', '#C0C0C0'],
      'peach-mint': ['#FFDAB9', '#98FF98'],
      'mint-peach': ['#98FF98', '#FFDAB9'],
      'lavender-rose': ['#E6E6FA', '#FF007F'],
      'rose-lavender': ['#FF007F', '#E6E6FA'],
      // Add more rainbow-like presets
      'rainbow-7': ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'],
      'pastel-rainbow': ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'],
      'ocean-sunset': ['#003973', '#E5E5BE', '#F3904F', '#B88A78'],
      'forest-haze': ['#5A3F37', '#2C7744', '#A8C0A8', '#E0E0E0'],
      'desert-sky': ['#f7b733', '#fc4a1a', '#4a117b', '#8ecae6', '#219ebc'],
      'neon-glow': ['#f0f', '#0ff', '#0f0', '#ff0'],
      'metallic-shine': ['#BDBDBD', '#757575', '#424242', '#E0E0E0', '#616161'],
      'earth-tones': ['#8B4513', '#A0522D', '#D2691E', '#CD853F', '#F4A460'],
      'sunrise': ['#FF5F6D', '#FFC371'],
      'sunset': ['#FF7E5F', '#FEB47B'],
      'evening-sky': ['#2C3E50', '#4CA1AF'],
      'midnight-blue': ['#0F2027', '#203A43', '#2C5364'],
      'emerald-water': ['#348F50', '#56B4D3'],
      'amethyst': ['#673AB7', '#512DA8'],
      'ruby-red': ['#D31027', '#EA384D'],
  };
  
  // DOM Elements
  const textInput = document.getElementById('textInput');
  const colorCountInput = document.getElementById('colorCount');
  const densityInput = document.getElementById('densityInput');
  const colorInputsContainer = document.getElementById('colorInputsContainer');
  const presetGrid = document.getElementById('presetGrid');
  const presetSearchInput = document.getElementById('presetSearch');
  const presetToggleBtn = document.querySelector('.color-presets-toggle');
  const presetContent = document.querySelector('.color-presets-content');
  const outputFormatSelector = document.getElementById('outputFormatSelector');
  const colorPreviewContent = document.getElementById('colorPreviewContent'); // Dedicated preview area
  const outputContent = document.getElementById('outputContent'); // For generated code
  const outputLabel = document.getElementById('outputLabel');
  const copyOutputBtn = document.getElementById('copyOutputBtn');
  const enableStylingCheckbox = document.getElementById('enableStylingCheckbox');
  const styleOptionsContainer = document.getElementById('styleOptionsContainer');
  const styleToggles = document.querySelectorAll('.style-toggle input[type="checkbox"]');
  
  let currentOutputFormat = 'html-hex'; // Default format (no 'preview' format anymore)
  let currentRawOutput = ''; // Store the raw text for copying
  
  // Initial setup function
  function initialSetup() {
    textInput.value = 'Hogwarts!'; // Default text
    updateColorInputs();
    createPresetGrid();
    updateStylingControlsState(); // Set initial styling state
    generateOutput(); // Initial generation
    addEventListeners();
    setActiveFormatButton(currentOutputFormat); // Set initial active button
  }
  
  // Add event listeners
  function addEventListeners() {
      textInput.addEventListener('input', generateOutput);
      colorCountInput.addEventListener('change', updateColorInputs);
      densityInput.addEventListener('input', generateOutput);
  
      presetToggleBtn.addEventListener('click', togglePresetContent);
      presetSearchInput.addEventListener('input', (e) => createPresetGrid(e.target.value));
  
      // Delegate event listener for dynamically added color inputs
      colorInputsContainer.addEventListener('input', (event) => {
          if (event.target.classList.contains('gradient-color')) {
              generateOutput();
          }
      });
  
      // Listener for output format buttons
      outputFormatSelector.addEventListener('click', (event) => {
          if (event.target.classList.contains('format-btn')) {
              const newFormat = event.target.dataset.format;
              // Only regenerate if the format actually changed
              if (newFormat !== currentOutputFormat) {
                  currentOutputFormat = newFormat;
                  setActiveFormatButton(currentOutputFormat);
                  generateOutput(); // Regenerate output for the new format
              }
          }
      });
  
      // Listener for enabling/disabling styling
      enableStylingCheckbox.addEventListener('change', () => {
          updateStylingControlsState();
          generateOutput();
      });
  
      // Listener for style toggles
      styleToggles.forEach(toggle => {
          toggle.addEventListener('change', generateOutput);
      });
  
      // Listener for copy button
      copyOutputBtn.addEventListener('click', () => copyToClipboard(currentRawOutput, copyOutputBtn));
  
      // Close preset dropdown if clicking outside
      document.addEventListener('click', (event) => {
          if (presetContent.classList.contains('open') && !presetContent.contains(event.target) && !presetToggleBtn.contains(event.target)) {
              togglePresetContent(false);
          }
      });
  }
  
  // Update enabled/disabled state of styling controls
  function updateStylingControlsState() {
      const enabled = enableStylingCheckbox.checked;
      styleOptionsContainer.classList.toggle('disabled', !enabled);
      styleToggles.forEach(toggle => {
          toggle.disabled = !enabled;
          // Optionally reset styles if disabled
          // if (!enabled) toggle.checked = false;
      });
  }
  
  // Set the active state for format buttons
  function setActiveFormatButton(format) {
      document.querySelectorAll('.format-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.format === format);
      });
      // Update label for the code output box
      const activeButton = document.querySelector(`.format-btn[data-format="${format}"]`);
      outputLabel.textContent = activeButton ? `Generated ${activeButton.textContent} Code:` : "Generated Code Output:";
  }
  
  // Create and populate the preset grid
  function createPresetGrid(filter = '') {
    presetGrid.innerHTML = ''; // Clear existing presets
    const lowerCaseFilter = filter.toLowerCase();
  
    Object.entries(colorPresets)
      .filter(([name]) => name.toLowerCase().includes(lowerCaseFilter))
      .forEach(([name, colors]) => {
        const presetItem = document.createElement('div');
        presetItem.className = 'preset-item';
  
        const previewDiv = document.createElement('div');
        previewDiv.className = 'preset-preview';
        previewDiv.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
  
        const nameDiv = document.createElement('div');
        nameDiv.className = 'preset-name';
        nameDiv.textContent = capitalize(name.replace(/-/g, ' ')); // Simple name for now
        if (colors.length > 2) {
           nameDiv.textContent += ` (${colors.length})`;
        }
  
        presetItem.appendChild(previewDiv); // Preview first
        presetItem.appendChild(nameDiv); // Name below
  
        presetItem.onclick = () => {
          colorCountInput.value = colors.length;
          updateColorInputs(colors); // Pass colors to set initial values
          togglePresetContent(false); // Close presets after selection
          generateOutput(); // Regenerate output after applying preset
        };
  
        presetGrid.appendChild(presetItem);
      });
  }
  
  // Toggle visibility of the preset color section
  function togglePresetContent(forceState) {
      const isOpen = presetContent.classList.contains('open');
      const show = forceState !== undefined ? forceState : !isOpen;
      if (show) {
          presetContent.classList.add('open');
          presetToggleBtn.querySelector('span').textContent = 'Preset Colors ▲';
      } else {
          presetContent.classList.remove('open');
          presetToggleBtn.querySelector('span').textContent = 'Preset Colors ▼';
      }
  }
  
  // Update the number and values of color input fields
  function updateColorInputs(presetColors = null) {
    const count = parseInt(colorCountInput.value);
    colorInputsContainer.innerHTML = ''; // Clear existing inputs
  
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.className = 'color-control';
      const input = document.createElement('input');
      input.type = 'color';
      input.className = 'gradient-color';
      input.dataset.index = i;
  
      // Set default/preset colors
      if (presetColors && presetColors[i]) {
          input.value = presetColors[i];
      } else {
          const startDefault = hexToRgb('#2196F3'); // Blueish
          const endDefault = hexToRgb('#FFEB3B');   // Yellowish
          const fraction = count > 1 ? i / (count - 1) : 0;
           input.value = rgbToHex(
                  Math.round(startDefault.r + (endDefault.r - startDefault.r) * fraction),
                  Math.round(startDefault.g + (endDefault.g - startDefault.g) * fraction),
                  Math.round(startDefault.b + (endDefault.b - startDefault.b) * fraction)
              );
      }
  
      div.appendChild(input);
      colorInputsContainer.appendChild(div);
    }
    generateOutput(); // Regenerate code after updating inputs
  }
  
  // Helper to capitalize strings
  function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  // Generate the output based on current settings and format
  function generateOutput() {
    const colorInputs = document.querySelectorAll('.gradient-color');
    const colors = Array.from(colorInputs).map(input => input.value);
    if (colors.length < 2) {
        colorPreviewContent.textContent = 'Please select at least 2 colors.';
        outputContent.textContent = 'Please select at least 2 colors.';
        currentRawOutput = '';
        copyOutputBtn.disabled = true;
        return;
     };
  
    const text = textInput.value;
    const density = parseInt(densityInput.value);
    const numSteps = Math.max(density, 2);
  
    // Get selected styles ONLY if styling is enabled
    let styles = {};
    if (enableStylingCheckbox.checked) {
        styles = {
            bold: document.getElementById('styleBold').checked,
            italic: document.getElementById('styleItalic').checked,
            underline: document.getElementById('styleUnderline').checked,
            strikethrough: document.getElementById('styleStrikethrough').checked,
        };
    }
  
    const noText = !text.trim(); // Check if text is empty or just whitespace
  
    if (noText) {
        colorPreviewContent.innerHTML = '';
        colorPreviewContent.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
        colorPreviewContent.style.minHeight = '50px';
        outputContent.textContent = 'Enter text to generate code.';
        currentRawOutput = '';
        copyOutputBtn.disabled = true;
        // Still generate RGB values if that format is selected
        if (currentOutputFormat === 'rgb-values') {
           const totalSteps = Math.max(numSteps, 10); // Default steps if no text
           const colorSteps = interpolateColors(colors, totalSteps);
           const { outputHTML, rawOutput } = generateRgbValuesOutput(colorSteps);
           outputContent.innerHTML = outputHTML;
           currentRawOutput = rawOutput;
           copyOutputBtn.disabled = false; // Enable copy for RGB values even without text
        }
        return;
    } else {
         colorPreviewContent.style.background = '';
         colorPreviewContent.style.minHeight = '';
         copyOutputBtn.disabled = false;
    }
  
    // Calculate color steps based on text length or density, whichever is larger
    const totalSteps = Math.max(numSteps, text.length);
    const colorSteps = interpolateColors(colors, totalSteps);
  
    // Always generate the visual preview
    const previewHTML = generatePreviewHTML(text, colorSteps, styles);
    colorPreviewContent.innerHTML = previewHTML;
  
    // Generate the CODE output based on the selected format
    let outputHTML = '';
    let rawOutput = '';
  
    switch (currentOutputFormat) {
        case 'html-hex':
            outputHTML = escapeHtml(generateHtmlOutput(text, colorSteps, styles, 'hex', false)); // Use false for 'raw' to get escaped output for display
            rawOutput = generateHtmlOutput(text, colorSteps, styles, 'hex', true); // Use true for raw copyable output
            break;
        case 'html-rgb':
            outputHTML = escapeHtml(generateHtmlOutput(text, colorSteps, styles, 'rgb', false)); // Use false for 'raw'
            rawOutput = generateHtmlOutput(text, colorSteps, styles, 'rgb', true); // Use true for raw
            break;
        case 'css':
            const { css, html } = generateCssOutput(text, colorSteps, styles);
            outputHTML = `<div class="label" style="color: #aaa; font-size: 0.9em;">CSS Rules:</div><pre style="margin-bottom: 10px;">${escapeHtml(css)}</pre><div class="label" style="color: #aaa; font-size: 0.9em;">HTML Structure:</div><pre>${escapeHtml(html)}</pre>`;
            rawOutput = `/* CSS Rules */\n${css}\n\n<!-- HTML Structure -->\n${html}`;
            break;
        case 'minecraft':
            outputHTML = generateMinecraftOutput(text, colorSteps, styles, true); // Generate display version
            rawOutput = generateMinecraftOutput(text, colorSteps, styles, false); // Generate raw version
            break;
        case 'discord':
            rawOutput = generateDiscordOutput(text, colorSteps, styles, false);
            outputHTML = `<pre style="white-space: pre-wrap; word-break: break-all;">${escapeHtml(rawOutput)}</pre>`;
            break;
        case 'bbcode':
            rawOutput = generateBbCodeOutput(text, colorSteps, styles, false);
            outputHTML = `<pre style="white-space: pre-wrap; word-break: break-all;">${escapeHtml(rawOutput)}</pre>`;
            break;
        case 'rgb-values': // Added case for RGB Values
            const rgbResult = generateRgbValuesOutput(colorSteps);
            outputHTML = rgbResult.outputHTML;
            rawOutput = rgbResult.rawOutput;
            break;
        default:
            outputHTML = 'Invalid format selected.';
            rawOutput = '';
    }
  
    outputContent.innerHTML = outputHTML;
    currentRawOutput = rawOutput;
  }
  
  // --- Format Generation Functions ---
  
  function generatePreviewHTML(text, colorSteps, styles) {
      let html = '';
      let currentStyle = '';
      if (styles.bold) currentStyle += 'font-weight: bold;';
      if (styles.italic) currentStyle += 'font-style: italic;';
      let textDecoration = [];
      if (styles.underline) textDecoration.push('underline');
      if (styles.strikethrough) textDecoration.push('line-through');
      if (textDecoration.length > 0) currentStyle += `text-decoration: ${textDecoration.join(' ')};`;
  
      const stepsAvailable = colorSteps.length;
  
      for (let i = 0; i < text.length; i++) {
          const colorIndex = Math.floor(i * (stepsAvailable / text.length));
          const color = colorSteps[Math.min(colorIndex, stepsAvailable - 1)];
          const char = escapeHtml(text[i]);
           html += `<span style="color: ${color}; ${currentStyle}">${char}</span>`;
      }
      return html;
  }
  
  function generateHtmlOutput(text, colorSteps, styles, colorFormat = 'hex', raw = false) {
      let result = '';
      let openTags = '';
      let closeTags = '';
      if (styles.bold) { openTags += '<strong>'; closeTags = '</strong>' + closeTags; }
      if (styles.italic) { openTags += '<em>'; closeTags = '</em>' + closeTags; }
      if (styles.underline) { openTags += '<u>'; closeTags = '</u>' + closeTags; }
      if (styles.strikethrough) { openTags += '<s>'; closeTags = '</s>' + closeTags; }
  
      const stepsAvailable = colorSteps.length;
  
      let previousColorValue = null;
      let currentSpanContent = '';
  
      function closePreviousSpan() {
          if (currentSpanContent) {
               result += `<span style="color: ${previousColorValue};">${openTags}${currentSpanContent}${closeTags}</span>`;
          }
          currentSpanContent = '';
      }
  
      for (let i = 0; i < text.length; i++) {
          const colorIndex = Math.floor(i * (stepsAvailable / text.length));
          const hexColor = colorSteps[Math.min(colorIndex, stepsAvailable - 1)];
          let colorValue;
          if (colorFormat === 'rgb') {
              const rgb = hexToRgb(hexColor);
              colorValue = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : '#000000';
          } else {
              colorValue = hexColor;
          }
          const char = raw ? text[i] : escapeHtml(text[i]);
  
          if (colorValue !== previousColorValue) {
              closePreviousSpan(); 
              previousColorValue = colorValue;
          }
          currentSpanContent += char;
      }
      closePreviousSpan(); 
  
      return result;
  }
  
  function generateCssOutput(text, colorSteps, styles) {
      let css = '';
      let html = '';
      let baseClasses = [];
      if (styles.bold) baseClasses.push(' s-bold'); 
      if (styles.italic) baseClasses.push(' s-italic');
      if (styles.underline) baseClasses.push(' s-underline');
      if (styles.strikethrough) baseClasses.push(' s-strike');
      const baseClassString = baseClasses.join('');
  
      if (styles.bold) css += '.s-bold { font-weight: bold; }\n';
      if (styles.italic) css += '.s-italic { font-style: italic; }\n';
      if (styles.underline) css += '.s-underline { text-decoration: underline; }\n';
      if (styles.strikethrough) css += '.s-strike { text-decoration: line-through; }\n';
       if (baseClasses.length > 0) css += '\n'; 
  
      const stepsAvailable = colorSteps.length;
  
      let previousClassName = null;
      let currentSpanContent = '';
  
      function closePreviousSpan() {
          if (currentSpanContent) {
              html += `<span class="${previousClassName}${baseClassString}">${currentSpanContent}</span>`;
          }
          currentSpanContent = '';
      }
  
      for (let i = 0; i < text.length; i++) {
          const colorIndex = Math.floor(i * (stepsAvailable / text.length));
          const color = colorSteps[Math.min(colorIndex, stepsAvailable - 1)];
          const char = escapeHtml(text[i]);
          const className = `c-${i}`; 
  
          if (className !== previousClassName) {
               closePreviousSpan();
               css += `.${className} { color: ${color}; }\n`; 
               previousClassName = className;
          }
          currentSpanContent += char;
      }
       closePreviousSpan(); 
  
      return { css, html };
  }
  
  function generateMinecraftOutput(text, colorSteps, styles, forDisplay = false) {
      let result = '';
      let activeFormatCodes = '';
      if (styles.bold) activeFormatCodes += '§' + minecraftFormatting.bold;
      if (styles.italic) activeFormatCodes += '§' + minecraftFormatting.italic;
      if (styles.underline) activeFormatCodes += '§' + minecraftFormatting.underline;
      if (styles.strikethrough) activeFormatCodes += '§' + minecraftFormatting.strikethrough;
  
      let previousMcCode = null;
      let displayResult = '';
  
      const stepsAvailable = colorSteps.length;
  
      for (let i = 0; i < text.length; i++) {
          const colorIndex = Math.floor(i * (stepsAvailable / text.length));
          const hexColor = colorSteps[Math.min(colorIndex, stepsAvailable - 1)];
          const mcCode = getClosestMinecraftColorCode(hexColor);
          const char = text[i];
          const escapedChar = escapeHtml(char);
  
          let prefix = '';
          if (mcCode !== previousMcCode) {
              prefix += `§${mcCode}`;
              prefix += activeFormatCodes;
              previousMcCode = mcCode;
          }
          result += prefix + char;
  
          if (forDisplay) {
              let displayPrefix = '';
               if (prefix.includes('§')) {
                  displayPrefix = prefix.replace(/§([0-9a-fklmnor])/g, (match, code) => {
                      let style = '';
                      let symbolColor = '#ccc'; 
                      if (minecraftColors[code]) {
                           style = `color: ${minecraftColors[code].hex};`;
                           symbolColor = minecraftColors[code].hex;
                      } else if (Object.values(minecraftFormatting).includes(code)) {
                           if (code === minecraftFormatting.bold) symbolColor = '#aaa';
                           else if (code === minecraftFormatting.italic) symbolColor = '#aaa';
                           else if (code === minecraftFormatting.underline) symbolColor = '#aaa';
                           else if (code === minecraftFormatting.strikethrough) symbolColor = '#aaa';
                           else symbolColor = '#aaa'; 
                      }
                       return `<span style="color: ${symbolColor}; font-weight: normal; font-style: normal; text-decoration: none; opacity: 0.7;">§${code}</span>`;
                  });
              }
  
              let charStyle = `color: ${minecraftColors[mcCode]?.hex || '#CCCCCC'};`; 
              if (activeFormatCodes.includes('§'+minecraftFormatting.bold)) charStyle += 'font-weight: bold;';
              if (activeFormatCodes.includes('§'+minecraftFormatting.italic)) charStyle += 'font-style: italic;';
              let textDeco = [];
              if (activeFormatCodes.includes('§'+minecraftFormatting.underline)) textDeco.push('underline');
              if (activeFormatCodes.includes('§'+minecraftFormatting.strikethrough)) textDeco.push('line-through');
              if (textDeco.length > 0) charStyle += `text-decoration: ${textDeco.join(' ')};`;
  
  
              displayResult += `${displayPrefix}<span style="${charStyle}">${escapedChar}</span>`;
          }
      }
  
       return forDisplay ? displayResult : result;
  }
  
  function generateDiscordOutput(text, colorSteps, styles, forDisplay = false) { 
      let rawResult = '```ansi\n';
  
      const stepsAvailable = colorSteps.length;
  
      for (let i = 0; i < text.length; i++) {
          const colorIndex = Math.floor(i * (stepsAvailable / text.length));
          const hexColor = colorSteps[Math.min(colorIndex, stepsAvailable - 1)];
          const ansiColorCode = getClosestDiscordAnsiCode(hexColor);
          const char = text[i];
  
          let ansiSequence = `\u001b[0;${ansiColorCode}`; 
  
          if (styles.bold) ansiSequence += `;${discordFormatting.bold}`;
          if (styles.underline) ansiSequence += `;${discordFormatting.underline}`;
          ansiSequence += `m${char}`;
          rawResult += ansiSequence;
      }
  
      rawResult += '\u001b[0m\n```'; 
  
      return rawResult;
  }
  
  function generateBbCodeOutput(text, colorSteps, styles, forDisplay = false) { 
      let result = '';
      let openTag = '';
      let closeTag = '';
      if (styles.bold) { openTag += bbCodeFormatting.bold[0]; closeTag = bbCodeFormatting.bold[1] + closeTag; }
      if (styles.italic) { openTag += bbCodeFormatting.italic[0]; closeTag = bbCodeFormatting.italic[1] + closeTag; }
      // Note: BBCode underline/strikethrough are less standard
      // if (styles.underline) { openTag += '[u]'; closeTag = '[/u]' + closeTag; }
      // if (styles.strikethrough) { openTag += '[s]'; closeTag = '[/s]' + closeTag; }
  
      const stepsAvailable = colorSteps.length;
  
      let previousColor = null;
      let currentBlockContent = '';
  
      function closePreviousBlock() {
          if (currentBlockContent) {
              result += `[color=${previousColor}]${openTag}${currentBlockContent}${closeTag}[/color]`;
          }
          currentBlockContent = '';
      }
  
      for (let i = 0; i < text.length; i++) {
          const colorIndex = Math.floor(i * (stepsAvailable / text.length));
          const color = colorSteps[Math.min(colorIndex, stepsAvailable - 1)];
          const char = text[i]; 
  
          if (color !== previousColor) {
              closePreviousBlock();
              previousColor = color;
          }
          currentBlockContent += char;
      }
       closePreviousBlock(); 
  
      return result;
  }
  
  // New function to generate simple RGB value list
  function generateRgbValuesOutput(colorSteps) {
      let rawOutput = '';
      let outputHTML = '<pre>'; // Use pre for formatting
  
      colorSteps.forEach(hexColor => {
          const rgb = hexToRgb(hexColor);
          if (rgb) {
              const rgbString = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
              rawOutput += rgbString + '\n';
              // Display with the color itself for visual aid
              outputHTML += `<span style="color: ${hexColor}">${escapeHtml(rgbString)}</span>\n`;
          }
      });
      outputHTML += '</pre>';
  
      return { outputHTML, rawOutput: rawOutput.trim() };
  }
  
  // --- Utility Functions ---
  
  function interpolateColors(colors, steps) {
    const result = [];
    if (!colors || colors.length === 0) return Array(steps).fill('#000000'); 
    if (steps <= 0) return []; 
    if (steps === 1) return [colors[0]]; 
    if (colors.length === 1) return Array(steps).fill(colors[0]);
  
    const segmentCount = colors.length - 1;
    const stepSize = 1 / (steps - 1);
  
    for (let i = 0; i < steps; i++) {
      const globalRatio = i * stepSize; 
      const segmentIndex = Math.min(Math.floor(globalRatio * segmentCount), segmentCount - 1); 
      const segmentRatio = (globalRatio * segmentCount) - segmentIndex; 
  
      const startColor = hexToRgb(colors[segmentIndex]);
      const endColor = hexToRgb(colors[segmentIndex + 1]);
  
      if (!startColor || !endColor) {
          console.warn("Invalid color found during interpolation:", colors[segmentIndex], colors[segmentIndex + 1]);
          const validColor = startColor || endColor;
          result.push(validColor ? rgbToHex(validColor.r, validColor.g, validColor.b) : '#000000');
          continue;
      }
  
      const r = Math.round(startColor.r + (endColor.r - startColor.r) * segmentRatio);
      const g = Math.round(startColor.g + (endColor.g - startColor.g) * segmentRatio);
      const b = Math.round(startColor.b + (endColor.b - startColor.b) * segmentRatio);
  
      result.push(rgbToHex(r, g, b));
    }
  
     if (steps > 1) {
         result[steps - 1] = colors[colors.length - 1];
     }
  
    return result;
  }
  
  // Convert HEX color to RGB object
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  // Convert RGB values to HEX color string
  function rgbToHex(r, g, b) {
      r = Math.max(0, Math.min(255, r));
      g = Math.max(0, Math.min(255, g));
      b = Math.max(0, Math.min(255, b));
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
  }
  
  // Find the closest Minecraft color code for a given HEX color
  function getClosestMinecraftColorCode(targetColor) {
    const target = hexToRgb(targetColor);
    if (!target) return minecraftColors['7'].code; 
  
    let minDistance = Infinity;
    let closestCode = minecraftColors['f'].code; 
  
    Object.values(minecraftColors).forEach(mcColor => {
      const current = hexToRgb(mcColor.hex);
      if (!current) return; 
  
      const distance = colorDistance(target, current);
  
      if (distance < minDistance) {
        minDistance = distance;
        closestCode = mcColor.code;
      }
    });
  
    return closestCode;
  }
  
  // Find closest Discord ANSI code (basic 16 colors)
  function getClosestDiscordAnsiCode(targetColor) {
      const target = hexToRgb(targetColor);
      if (!target) return 37; 
  
      let minDistance = Infinity;
      let closestCode = 37; 
  
      Object.entries(discordAnsiMap).forEach(([hex, code]) => {
          const current = hexToRgb(hex);
          if (!current) return;
          const distance = colorDistance(target, current);
          if (distance < minDistance) {
              minDistance = distance;
              closestCode = code;
          }
      });
      return closestCode;
  }
  
  // Calculate Euclidean distance between two RGB colors
  function colorDistance(rgb1, rgb2) {
      return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
      );
  }
  
  // Copy text to clipboard and provide user feedback
  function copyToClipboard(text, button) {
      if (!text) return; 
  
      navigator.clipboard.writeText(text).then(() => {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.disabled = true;
          button.style.backgroundColor = '#4CAF50'; 
          setTimeout(() => {
              button.textContent = originalText;
              button.disabled = false;
              button.style.backgroundColor = ''; 
          }, 1500); 
      }).catch(err => {
          console.error('Failed to copy text: ', err);
          const originalText = button.textContent;
          button.textContent = 'Failed!';
          button.disabled = true;
           button.style.backgroundColor = '#F44336'; 
           setTimeout(() => {
              button.textContent = originalText;
               button.disabled = false;
               button.style.backgroundColor = ''; 
          }, 2000);
      });
  }
  
  // Simple HTML escaping
  function escapeHtml(unsafe) {
      return unsafe
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
   }
  
  // Initialize when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initialSetup);