# Updating the replication package

## Maintain the selected-study index

1. Verify the Paper ID, title, and DOI against the supplied study-information workbook and publisher record.
2. Open `script.js` and locate the study by its exact `id` value.
3. Keep the `title`, `doi`, and `form` properties aligned:

   ```javascript
   { id: "Example2026", title: "Example paper", doi: "10.0000/example.2026.1", form: "Example2026.html" }
   ```

4. Open the selected-studies section and confirm that the title and DOI render correctly. Then confirm that the corresponding form remains available in the Validation section.

Keep the Paper ID unchanged so it continues to match the extraction workbooks.

## Maintain an author-validation form

1. Preserve the filename used by the corresponding `form` entry in `script.js`.
2. Place it in `artifacts/author-validation/`.
3. Confirm the link works from both `studies.html` and `validation.html`.

Keep response records anonymous and do not add author identities to the released workbook.

## Interview material

`artifacts/interviews/interview-summary.md` is the only interview material in this replication package. Keep references on the website aligned with that file.

## Release verification

Verify every download and external DOI link before creating a versioned archive.
