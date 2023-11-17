import { Component } from '@angular/core';
import { bootstrapApplication, DomSanitizer } from '@angular/platform-browser';
import 'zone.js';

import { PDFDocument } from 'pdf-lib';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

const pdf = pdfMake;
pdf.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>PdfMake preview</h1>
    <button (click)="onPdf()">do</button><br>
    <iframe
      [src]="pdfSrc"
      width="480px"
      height="660px"
      loading="lazy"
      title="PDF-file"
  ></iframe>
  `,
})
export class App {
  constructor(private sanitizer: DomSanitizer) {}
  name = 'Angular';

  pdfData =
    'JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwog' +
    'IC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv' +
    'TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0K' +
    'Pj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg' +
    'L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+' +
    'PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u' +
    'dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2Jq' +
    'Cgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU' +
    'CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVu' +
    'ZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g' +
    'CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAw' +
    'MDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v' +
    'dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G';

  pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
    'data:application/pdf;base64,' + this.pdfData
  );

  angularLogo = `
  <svg width="512px" height="125px" viewBox="0 0 512 125" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <title>Angular</title>
    <defs>
        <linearGradient x1="0%" y1="48.0651813%" x2="100%" y2="50.3909793%" id="angularLinearGradient-1">
            <stop stop-color="#E847A3" offset="0%"/>
            <stop stop-color="#DA5AF7" offset="25.6871273%"/>
            <stop stop-color="#DD57F6" offset="33.7594597%"/>
            <stop stop-color="#B848F4" offset="56.4416993%"/>
            <stop stop-color="#8842F6" offset="100%"/>
        </linearGradient>
        <linearGradient x1="36.6151082%" y1="41.6558838%" x2="33.2923255%" y2="100%" id="angularLinearGradient-2">
            <stop stop-color="#E03440" stop-opacity="0.2" offset="0%"/>
            <stop stop-color="#E03440" stop-opacity="0.62" offset="28.0229926%"/>
            <stop stop-color="#E03440" offset="100%"/>
        </linearGradient>
    </defs>
    <g>
        <path d="M116.02839,20.4766124 L111.83871,86.2675 L71.7804744,0 L116.02839,20.4766124 Z M88.2826637,105.547658 L58.0144562,122.8184 L27.7457262,105.547658 L33.9019807,90.6280279 L82.1264092,90.6280279 L88.2826637,105.547658 Z M58.0144562,32.7457564 L73.8750534,71.3055499 L42.1533366,71.3055499 L58.0144562,32.7457564 Z M4.14683795,86.2675 L0,20.4766124 L44.2479156,0 L4.14683795,86.2675 Z M476.370347,99.9104 L476.370347,37.4370133 L490.64704,37.4370133 L490.64704,47.84896 L491.297707,47.84896 C492.43648,44.2432 494.395307,41.4570667 497.174613,39.4909867 C499.954347,37.5253333 503.133013,36.5422933 506.71232,36.5422933 C507.525973,36.5422933 508.441173,36.5764267 509.45792,36.64384 C510.47424,36.71168 511.322027,36.8132267 512,36.9489067 L512,50.4925867 C511.375787,50.2762667 510.3936,50.08 509.051307,49.9029333 C507.709013,49.7271467 506.41408,49.6384 505.166933,49.6384 C502.482773,49.6384 500.075947,50.2148267 497.94688,51.3672533 C495.817813,52.5201067 494.144,54.1124267 492.92416,56.1463467 C491.704747,58.17984 491.094187,60.5256533 491.094187,63.1829333 L491.094187,99.9104 L476.370347,99.9104 Z M446.452907,36.6229333 C449.46304,36.6229333 452.45952,36.9762133 455.442347,37.68064 C458.424747,38.38592 461.14944,39.5451733 463.61728,41.1584 C466.08384,42.7720533 468.071253,44.96128 469.576533,47.72736 C471.080533,50.4925867 471.833173,53.9502933 471.833173,58.0983467 L471.833173,99.9104 L457.678933,99.9104 L457.678933,91.3284267 L457.190827,91.3284267 C456.29568,93.0641067 455.041707,94.68416 453.428907,96.1890133 C451.81568,97.6938667 449.794987,98.9009067 447.368533,99.8088533 C444.941653,100.717227 442.101333,101.1712 438.847147,101.1712 C434.888107,101.1712 431.329707,100.45952 428.17024,99.0357333 C425.0112,97.6128 422.516907,95.50464 420.686933,92.7112533 C418.85696,89.91872 417.94176,86.4750933 417.94176,82.3803733 C417.94176,78.8561067 418.592427,75.9406933 419.893333,73.63584 C421.195093,71.3314133 422.971307,69.4869333 425.221973,68.1041067 C427.471787,66.72128 430.01472,65.6708267 432.848213,64.95232 C435.681707,64.2338133 438.617173,63.7115733 441.654187,63.3864533 L443.485842,63.1930792 L445.609391,62.9590519 C447.410753,62.7552526 448.982152,62.5626991 450.323589,62.3812277 L450.561707,62.3488 C452.839253,62.03776 454.500267,61.5496533 455.543893,60.8849067 C456.587093,60.2205867 457.110187,59.18336 457.110187,57.7732267 L457.110187,57.5291733 C457.110187,54.46528 456.200533,52.0930133 454.38464,50.41152 C452.567467,48.7304533 449.951573,47.8894933 446.535253,47.8894933 C442.92864,47.8894933 440.073813,48.6762667 437.972907,50.24896 C435.871147,51.8216533 434.455467,53.67936 433.722453,55.8212267 L419.97568,53.8688 C421.058987,50.0727467 422.848853,46.8932267 425.344427,44.3310933 C427.83872,41.7681067 430.88896,39.8434133 434.495573,38.5553067 C438.101333,37.2676267 442.086827,36.6229333 446.452907,36.6229333 Z M457.150293,70.1380267 C456.68864,70.51776 455.90912,70.8701867 454.81216,71.1953067 C453.713493,71.5204267 452.486827,71.80544 451.13088,72.0494933 C450.046123,72.244736 448.970103,72.4227755 447.903041,72.5831748 L446.800938,72.7434978 L443.64672,73.1882667 C441.451093,73.4869333 439.484587,73.97504 437.749333,74.6525867 C436.013653,75.33056 434.644053,76.2730667 433.64096,77.47968 C432.638293,78.6862933 432.136107,80.2389333 432.136107,82.1367467 C432.136107,84.8482133 433.125973,86.8949333 435.104853,88.2781867 C437.085013,89.6610133 439.606613,90.3522133 442.670507,90.3522133 C445.626027,90.3522133 448.187733,89.76256 450.35776,88.5832533 C452.526507,87.40352 454.202027,85.8376533 455.381333,83.8856533 C456.56064,81.9328 457.150293,79.8045867 457.150293,77.4997333 L457.150293,70.1380267 Z M400.751787,99.9104 L415.475627,99.9104 L415.475627,16.61184 L400.751787,16.61184 L400.751787,99.9104 Z M381.206613,73.63584 L381.206613,37.4370133 L395.930027,37.4370133 L395.930027,99.9104 L381.654187,99.9104 L381.654187,88.8068267 L381.002667,88.8068267 C379.59296,92.30464 377.28128,95.16544 374.068053,97.3888 C370.85568,99.6125867 366.902613,100.724053 362.21184,100.724053 C358.117547,100.724053 354.504107,99.8088533 351.371947,97.9784533 C348.240213,96.14848 345.79328,93.4779733 344.031147,89.96608 C342.26816,86.4546133 341.387947,82.20416 341.387947,77.2151467 L341.387947,37.4370133 L356.110933,37.4370133 L356.110933,74.9371733 C356.110933,78.89664 357.195093,82.0416 359.364693,84.37376 C361.533867,86.7054933 364.381013,87.8711467 367.906133,87.8711467 C370.07488,87.8711467 372.176213,87.3425067 374.210987,86.2848 C376.244053,85.22752 377.917867,83.6484267 379.233707,81.5466667 C380.508432,79.5094238 381.166111,76.9678728 381.2048,73.9227915 L381.206613,73.63584 Z M303.29472,36.6229333 C306.955947,36.6229333 309.972053,37.24032 312.344747,38.4738133 C314.717013,39.70816 316.608427,41.1857067 318.01856,42.9073067 C319.428267,44.62976 320.499627,46.2493867 321.231787,47.7678933 L322.045013,47.7678933 L322.045013,37.4370133 L336.565333,37.4370133 L336.565333,100.927573 C336.565333,106.269013 335.29088,110.688853 332.7424,114.186667 C330.193493,117.68448 326.70848,120.301227 322.289493,122.036907 C317.869227,123.771733 312.852907,124.64 307.240533,124.64 C301.952427,124.64 297.41056,123.927893 293.614507,122.504533 C289.818453,121.080747 286.768213,119.17568 284.46336,116.78976 C282.158507,114.403413 280.558933,111.759787 279.664213,108.858453 L292.923733,105.645227 C293.51936,106.865493 294.387627,108.078507 295.526827,109.285973 C296.6656,110.491733 298.20416,111.49568 300.142933,112.29568 C302.081707,113.094827 304.52864,113.495467 307.48416,113.495467 C311.659947,113.495467 315.117227,112.48512 317.856427,110.46528 C320.594347,108.445013 321.963947,105.129813 321.963947,100.52096 L321.963947,88.6848 L321.231787,88.6848 C320.47232,90.2033067 319.36768,91.7623467 317.91744,93.3623467 C316.465493,94.9623467 314.554027,96.30464 312.18176,97.3888 C309.809067,98.4738133 306.833493,99.01568 303.254187,99.01568 C298.455467,99.01568 294.109013,97.8837333 290.218667,95.6194133 C286.327467,93.3559467 283.23584,89.96608 280.945493,85.45152 C278.653867,80.9365333 277.50784,75.2768 277.50784,68.4701867 C277.50784,61.61024 278.653867,55.8148267 280.945493,51.0826667 C283.23584,46.3509333 286.334293,42.7584 290.239147,40.3042133 C294.144,37.8504533 298.495573,36.6229333 303.29472,36.6229333 Z M307.362133,48.7031467 C304.081493,48.7031467 301.34272,49.5573333 299.14624,51.2657067 C296.950187,52.97408 295.296,55.31264 294.184533,58.2818133 C293.071787,61.2509867 292.516693,64.6203733 292.516693,68.3886933 C292.516693,72.2120533 293.07904,75.55456 294.205013,78.4149333 C295.329707,81.27616 296.997547,83.4990933 299.206827,85.08544 C301.416533,86.67136 304.135253,87.4645333 307.362133,87.4645333 C310.480213,87.4645333 313.137493,86.7054933 315.333973,85.1869867 C317.53088,83.66848 319.19872,81.4856533 320.337067,78.6389333 C321.47584,75.79136 322.045013,72.37504 322.045013,68.3886933 C322.045013,64.4578133 321.48224,61.01376 320.357547,58.05824 C319.232,55.10272 317.577813,52.80512 315.39584,51.1637333 C313.21216,49.5236267 310.535253,48.7031467 307.362133,48.7031467 Z M234.6944,63.30496 L234.6944,99.9104 L219.970987,99.9104 L219.970987,37.4370133 L234.044587,37.4370133 L234.044587,48.05248 L234.77632,48.05248 C236.212907,44.5546667 238.510933,41.77536 241.669973,39.71456 C244.828587,37.6541867 248.740267,36.6229333 253.404587,36.6229333 C257.715627,36.6229333 261.477547,37.5453867 264.691627,39.3890133 C267.904,41.2334933 270.398293,43.9035733 272.174933,47.4013867 C273.906576,50.8143037 274.781737,54.9370967 274.798833,59.7685769 L274.798833,99.9104 L260.074667,99.9104 L260.074667,62.41024 C260.074667,58.23488 258.996907,54.9666133 256.840533,52.608 C254.685867,50.24896 251.70944,49.0692267 247.913813,49.0692267 C245.3376,49.0692267 243.053227,49.6324267 241.05984,50.75712 C239.06688,51.8826667 237.50784,53.50272 236.38272,55.6177067 C235.294692,57.6621938 234.732544,60.1249133 234.696276,63.0054798 L234.6944,63.30496 Z M189.43872,16.6122667 L218.80448,99.9104 L202.697813,99.9104 L195.796907,79.3706667 L164.480427,79.3706667 L157.591893,99.9104 L141.485227,99.9104 L170.810027,16.6122667 L189.43872,16.6122667 Z M180.45056,33.69472 L179.79904,33.69472 L168.54528,67.24992 L191.724373,67.24992 L180.45056,33.69472 Z" fill="url(#angularLinearGradient-1)"/>
        <path d="M88.2826637,105.547658 L58.0144562,122.8184 L27.7457262,105.547658 L33.9019807,90.6280279 L82.1264092,90.6280279 L88.2826637,105.547658 Z M58.0144562,32.7457564 L73.8750534,71.3055499 L42.1533366,71.3055499 L58.0144562,32.7457564 Z M4.14683795,86.2675 L7.10542736e-15,20.4766124 L44.2479156,0 L4.14683795,86.2675 Z" fill="url(#angularLinearGradient-2)"/>
    </g>
</svg>`;

  async onPdf() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    const year = today.getFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${year}`;

    pdf.fonts = {
      Arial: {
        normal: 'arial.ttf', // TODO add base64 converted fonts as strings here
        bold: 'arialbd.ttf',
        italics: 'ariali.ttf',
        bolditalics: 'arialbi.ttf',
      },
    };

    const docDefinition = {
      pageMargins: [85, 70, 42, 70],
      header: function (currentPage, pageCount, pageSize) {},
      footer: function (currentPage, pageCount) {
        return {
          text: currentPage.toString() + '/' + pageCount,
          alignment: 'right',
          margin: [0, 0, 42, 0],
        };
      },
      defaultStyle: {
        //font: 'Arial',
      },
      styles: {
        address: {
          fontSize: 18,
          bold: true,
          alignment: 'left',
          margin: [0, 120, 0, 20],
        },
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 20],
        },
        subheader: {
          fontSize: 14,
        },
        superMargin: {
          margin: [20, 0, 20, 0],
          fontSize: 15,
        },
      },
      content: [
        {
          columns: [
            {
              width: '55%',
              text: 'Recipient Address\nCity, Country\n\n',
              alignment: 'left',
              fontSize: 10,
            },
            {
              width: '*',
              text: [
                'Your Company Name\nYour Company Address\nCity, Country\n\n\n\n\n',
                { text: formattedDate, alignment: 'right', fontSize: 10 },
              ],
              fontSize: 10,
            },
          ],
          style: 'address',
        },
        {
          stack: [
            'This header has both top and bottom margins defined',
            { text: 'This is a subheader', style: 'subheader' },
          ],
          style: 'header',
        },
        {
          width: 200,
          absolutePosition: { x: 340, y: 60 },
          svg: this.angularLogo,
        },
        {
          width: 12,
          absolutePosition: { x: 60, y: 542 },
          svg: `
            <svg>
              <text
                transform="translate(12, 220) rotate(-90)"
                font-weight="bold"
                style="font-size: 8px;"
              >
                AADEBLBL 120-11-00005251 231116-201420 00240728-8 
              </text>
            </svg>
          `,
        },
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines',
        {
          table: {
            widths: ['*', 'auto', 100, '*'],
            body: [
              [
                'Column 1',
                'Column 2',
                'Column 3',
                { text: '', rowSpan: 10, fillColor: '#00FF00', width: '100%' },
              ],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
              ['Column 1', 'Column 2', 'Column 3', ''],
              ['One value goes here', 'Another one here', 'OK?', ''],
            ],
          },
        },
      ],
    };

    const pdfDocGenerator = pdf.createPdf(
      docDefinition,
      null,
      null,
      pdfFonts.pdfMake.vfs
    );

    pdfDocGenerator.getBase64(async (data) => {
      console.log(data);

      const dataAsPdfA = await this.convertToPDFA(data);

      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        'data:application/pdf;base64,' + dataAsPdfA
      );
    });
  }

  async convertToPDFA(base64PDF: string) {
    // Convert base64 string to Uint8Array
    const uint8Array = new Uint8Array(
      atob(base64PDF)
        .split('')
        .map((char) => char.charCodeAt(0))
    );

    // Load the existing PDF
    const pdfDoc = await PDFDocument.load(uint8Array);

    // Perform PDF/A conversion steps (embed fonts, set metadata, etc.)
    // ...

    // Save the converted PDF/A as Uint8Array
    const pdfABytes = await pdfDoc.save();

    /// Convert Uint8Array to base64 for further use
    const pdfABase64 = btoa(String.fromCharCode.apply(null, pdfABytes as any));

    // Optionally, you can use pdfABase64 as needed
    console.log(pdfABase64);
    return pdfABase64;
  }
}

bootstrapApplication(App);
