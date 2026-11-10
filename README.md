# Cypress QA Testing - LetCode

**Mata kuliah:** Testing QA  
**Framework:** Cypress 16  
**Situs yang diuji:** [LetCode Practice Workspace](https://letcode.in/test)

## Tujuan

Project ini berisi end-to-end test untuk 21 lab latihan yang tercantum pada LetCode Practice Workspace, serta halaman workspace dan fitur pencariannya. Test case manual tersedia di [Test_Cases_LetCode.xlsx](outputs/01a1c3bb-342e-7b90-b838-ec3308679acf/Test_Cases_LetCode.xlsx).

## Cakupan

| Area | File spec |
| --- | --- |
| Workspace dan pencarian | `cypress/e2e/letcode/workspace.cy.js` |
| Page Object Model | `cypress/e2e/letcode/pom.cy.js` |
| Edit Fields | `cypress/e2e/letcode/edit-fields.cy.js` |
| Click Actions | `cypress/e2e/letcode/click-actions.cy.js` |
| Drop-Down | `cypress/e2e/letcode/dropdown.cy.js` |
| Dialog Box | `cypress/e2e/letcode/dialog-box.cy.js` |
| Nested Frames | `cypress/e2e/letcode/nested-frames.cy.js` |
| Toggle States | `cypress/e2e/letcode/toggle-states.cy.js` |
| Tabs Handler | `cypress/e2e/letcode/tabs-handler.cy.js` |
| Find Elements | `cypress/e2e/letcode/find-elements.cy.js` |
| AUI - Drag | `cypress/e2e/letcode/aui-drag.cy.js` |
| AUI - Drop | `cypress/e2e/letcode/aui-drop.cy.js` |
| AUI - Sort | `cypress/e2e/letcode/aui-sort.cy.js` |
| AUI - Selectable | `cypress/e2e/letcode/aui-selectable.cy.js` |
| AUI - Slider | `cypress/e2e/letcode/aui-slider.cy.js` |
| Timeouts | `cypress/e2e/letcode/timeouts.cy.js` |
| WebTable | `cypress/e2e/letcode/webtable.cy.js` |
| Advanced Table | `cypress/e2e/letcode/advanced-table.cy.js` |
| Date Pickers | `cypress/e2e/letcode/date-pickers.cy.js` |
| Form Inputs | `cypress/e2e/letcode/form-inputs.cy.js` |
| File Operations | `cypress/e2e/letcode/file-operations.cy.js` |
| DOM Elements / Shadow DOM | `cypress/e2e/letcode/dom-elements.cy.js` |

Workbook berisi 23 test case: dua untuk workspace dan satu untuk setiap lab.

## Prasyarat

- Node.js terpasang.
- Dependencies project sudah di-install. Jika menyiapkan checkout baru, jalankan `npm install` dari root project.
- Koneksi internet tersedia karena target test adalah situs publik.

## Menjalankan test

Buka Cypress secara interaktif:

```bash
npx cypress open
```

Jalankan semua spec LetCode dari terminal:

```bash
npx cypress run --spec "cypress/e2e/letcode/**/*.cy.js"
```

Jalankan satu spec tertentu:

```bash
npx cypress run --spec "cypress/e2e/letcode/edit-fields.cy.js"
```

Pilih spec lain di folder `cypress/e2e/letcode/` untuk menjalankan lab tertentu saja.

## Status dan batas cakupan

Semua test case di workbook berstatus **Belum dijalankan**. Beberapa lab saat ini diuji dengan pemeriksaan halaman dan kontrol tersedia, sedangkan input, dropdown, tombol disabled, alert, pencarian workspace, dan total tabel memiliki assertion perilaku yang lebih spesifik. Test drag-and-drop, sorting dengan mouse, interaksi penuh iframe, perpindahan tab browser, dan alur upload/download belum disimulasikan sampai akhir.
