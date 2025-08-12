# Painting-Estimator
This tool is intended for residential painters that want to include accurate and free estimates of a project to a potential customer without physically going to a house. 
Persona: Busy single-person painter, Bob, that has an LLC and would like to provide an online tool to prospective clients for them to get an accurate estiamte the same day. 
  Bob saves time and energy by not going physically going to a house until a statement of work is signed.
  The customer benefits by getting a transparent same-day estimate.


# Feature 1: Image Upload
## User Requirements
- Upload 1–50 interior or exterior house photos
- Images are used only for the current estimate and not persisted
- All uploaded images are deleted when the page is refreshed or tab is closed
## Acceptance Criteria
- Users can drag & drop or browse to select up to 50 images at once
- The UI shows a thumbnail preview for each selected image
- Upload progress indicators display for large files
- No uploaded images remain on the server or client storage after page unload or refresh
- Attempts to upload >50 images are blocked with an error message

  
# Feature 2: Image Analysis & Estimation
## User Requirements
- Automatically detect painted surface area and original paint type from photos
- Calculate total square footage of walls, ceilings, trim, etc.
- Infer existing paint finish (e.g., flat, eggshell) when possible
## Acceptance Criteria
- Cropping or frame-selection tool guides users to mark regions of interest
- Backend returns an estimated square footage within ± 5% of manual measurement
- Detected paint finish matches user confirmation (if user overrides)
- Analysis returns results in under 10 seconds for up to 50 images


# Feature 3: Paint Quality Selection
## User Requirements
- Offer a slider to choose paint quality: Low, Medium, or High
- Quality choice adjusts material cost multipliers
## Acceptance Criteria
- Slider displays three clearly labeled positions (Low, Medium, High)
- Moving the slider updates a label and tooltip describing quality differences
- Cost calculations use the selected multiplier (e.g., × 0.8, × 1.0, × 1.2)
- Default quality is set to Medium on first visit

# Feature 4: Color Selection
## User Requirements
- Provide a grid of popular paint colors and an option to enter a custom hex code
- Preview the selected color on a sample wall graphic
## Acceptance Criteria
- Color grid shows at least 30 named swatches with hover labels
- Custom hex input validates format (#RRGGBB) and shows an error on invalid codes
- Preview pane immediately reflects chosen swatch or custom color
- Selected color value is included in the final estimate breakdown


# Feature 5: Estimate Generation
## User Requirements
- Submit button triggers calculation of material and labor costs based on area, quality, and selected color
- Display an estimate range (minimum–maximum) to account for variability
- Provide a downloadable PDF summary or email option
## Acceptance Criteria
- Submit button is disabled until mandatory inputs (images, quality, color) are provided
- On submit, the system shows a loading indicator and then displays:
  - Total square footage
  - Unit cost breakdown (paint, primer, supplies, labor rate)
  - Final estimate range (e.g., $1,200–$1,500)
- Users can download or email a PDF report with a timestamp and breakdown
- Error handling for API failures with user‑friendly messages

# Feature 6: Manual Square Footage Entry (Bypass Image Upload)
## User Requirements
- Allow painters (e.g. Bob or his employees) and customers to manually enter an estimated square footage if they prefer not to upload images
- This option should be clearly marked as a manual override and available to all users
- Users should still be able to select paint quality and color as usual
- The estimate generation should proceed normally using the entered square footage
- A visible disclaimer clarifies that estimates based on manual entry may be less accurate
## Acceptance Criteria
- A toggle or checkbox labeled “Skip image upload / Enter square footage manually” appears on the upload screen
- When selected:
  - Image upload section becomes disabled
  - A clean input field appears allowing entry of a square footage number
  - Input is validated for positive numbers only
  - A disclaimer appears beneath the input field:  
    _“This estimate is based on a manually entered square footage and may vary from actual measurements.”_
- System uses the manually entered square footage in all subsequent calculations
- Paint quality and color selection workflows remain unchanged
- Submit button and final estimate display behave the same as in the image-based flow
- Final estimate PDF includes a note:  
  _“Estimate based on manually entered square footage.”_


Made with ♥ for painters everywhere.
