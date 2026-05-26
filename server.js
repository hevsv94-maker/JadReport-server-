const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const SIG_IMG = "data:image/png;base64,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";

const patients = {
  "1024840180": { name: "MR. DINESH AGARWAL",  sex: "Male",   age: 35, regDate: "05-Mar-2026", regTime: "10:47 AM", apprTime: "11:05 AM", micro: 99.1,  creat: 101.3, acr: 97.81  },
  "1024820874": { name: "MR. KAPIL VERMA",     sex: "Male",   age: 60, regDate: "18-Jan-2026", regTime: "14:22 PM", apprTime: "14:48 PM", micro: 146.1, creat: 74.7,  acr: 195.57 },
  "1024867896": { name: "MS. PRIYA GUPTA",     sex: "Female", age: 53, regDate: "02-Apr-2026", regTime: "09:15 AM", apprTime: "09:38 AM", micro: 78.7,  creat: 107.6, acr: 73.11  },
  "1024837713": { name: "MR. DINESH SHARMA",   sex: "Male",   age: 50, regDate: "14-Feb-2026", regTime: "11:30 AM", apprTime: "11:52 AM", micro: 23.3,  creat: 72.6,  acr: 32.06  },
  "1024837207": { name: "MS. ANITA MEENA",     sex: "Female", age: 34, regDate: "21-Mar-2026", regTime: "16:05 PM", apprTime: "16:29 PM", micro: 94.3,  creat: 74.5,  acr: 126.53 },
  "1024822145": { name: "MS. REKHA JOSHI",     sex: "Female", age: 47, regDate: "08-Feb-2026", regTime: "10:12 AM", apprTime: "10:38 AM", micro: 42.0,  creat: 115.8, acr: 36.29  },
  "1024867385": { name: "MS. USHA VERMA",      sex: "Female", age: 58, regDate: "25-Apr-2026", regTime: "13:44 PM", apprTime: "14:10 PM", micro: 82.0,  creat: 61.7,  acr: 132.89 },
  "1024859784": { name: "MR. RAKESH YADAV",    sex: "Male",   age: 36, regDate: "11-May-2026", regTime: "09:55 AM", apprTime: "10:18 AM", micro: 122.2, creat: 190.6, acr: 64.11  },
  "1024850702": { name: "MR. DINESH SHARMA",   sex: "Male",   age: 46, regDate: "29-Mar-2026", regTime: "15:20 PM", apprTime: "15:45 PM", micro: 35.3,  creat: 63.0,  acr: 56.05  },
  "1024849284": { name: "MS. SUNITA SHARMA",   sex: "Female", age: 43, regDate: "17-May-2026", regTime: "08:40 AM", apprTime: "09:05 AM", micro: 430.5, creat: 175.4, acr: 245.45 },
  "1024800151": { name: "MR. SHARWAN",         sex: "Male",   age: 72, regDate: "05-Jan-2026", regTime: "03:21 PM", apprTime: "03:44 PM", micro: 85.0,  creat: 90.3,  acr: 94.13  },
};

function barcodesSVG() {
  const widths = [3,1,2,1,3,2,1,2,1,3,1,1,2,3,1,2,1,1,3,2,1,1,2,1,3,1,2,3,1,1,2,1,3,2,1];
  let x = 0, svg = '', black = true;
  for (const w of widths) {
    const pw = w * 3;
    if (black) svg += `<rect x="${x}" y="0" width="${pw}" height="100%" fill="#000"/>`;
    x += pw + 1;
    black = !black;
  }
  return `<svg viewBox="0 0 ${x} 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="width:160px;height:38px">${svg}</svg>`;
}

app.get('/SLIMS.API/api/public/DownloadReport', (req, res) => {
  const { labId } = req.query;
  const p = patients[labId];

  if (!p) {
    return res.status(404).send(`<!DOCTYPE html><html><body style="font-family:Helvetica,Arial,sans-serif;text-align:center;padding:60px">
      <h2>Report Not Found</h2><p>Lab ID <b>${labId || 'unknown'}</b> not found.</p></body></html>`);
  }

  const pageUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>PLD Diagnostics – Laboratory Report</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Helvetica,Arial,sans-serif;font-size:10pt;background:#e8e8e8;color:#000}
.page{width:794px;min-height:1123px;background:#fff;margin:24px auto;padding:18px 44px 30px;position:relative;box-shadow:0 2px 18px rgba(0,0,0,.18)}
/* top row */
.top{display:flex;align-items:flex-start;margin-bottom:2px}
.barcode{display:flex;align-items:center}
.lab-title{flex:1;text-align:center;font-size:14pt;font-weight:bold;text-decoration:underline;padding-top:8px}
.qr-block{text-align:center;font-size:7.5pt;line-height:1.3;min-width:90px}
.qr-block img{display:block;margin:0 auto 3px;width:72px;height:72px}
/* header table */
.hdr{width:100%;border-top:2px solid #000;border-bottom:2px solid #000;border-collapse:collapse;margin-bottom:10px}
.hdr td{font-size:9.5pt;padding:2px 0;vertical-align:top}
.hdr .lbl{font-weight:bold;white-space:nowrap;padding-right:2px}
.hdr .col{white-space:nowrap;padding-right:2px;min-width:16px}
.hdr .val{padding-right:20px}
.hdr .mid{width:20px}
/* section title */
.sec{text-align:center;font-weight:bold;font-size:11pt;margin:14px 0 0;letter-spacing:.3px}
/* dashed line */
.dash{border:none;border-top:1px dashed #888;margin:0}
/* results table */
.rtbl{width:100%;border-collapse:collapse}
.rtbl th{font-weight:bold;font-size:9pt;padding:4px 4px 3px;text-align:left;border-top:1px dashed #888;border-bottom:1px dashed #888}
.rtbl th.rc{text-align:center}
.rtbl td{padding:5px 4px;vertical-align:top;font-size:9.5pt}
.rtbl td.rv{text-align:center;font-weight:bold;font-size:11pt}
.rtbl tr{border-bottom:1px dashed #ccc}
.tn{font-weight:bold;font-size:10pt}
.tm{font-size:7.5pt;font-style:italic;color:#444;margin-top:1px}
.rr{font-size:9pt;line-height:1.5}
/* notes */
.notes{font-size:9.3pt;line-height:1.58;margin-top:16px;text-align:justify}
/* end */
.endline{text-align:center;font-size:8.5pt;color:#555;margin:22px 0 8px}
/* footer */
.footer{border-top:1.5px solid #000;margin-top:40px;padding-top:6px;font-size:8.5pt}
.footer-row{display:flex;justify-content:space-between;align-items:flex-start}
.sig{text-align:right}
.sig img{height:52px;display:block;margin-left:auto}
.sig .signame{font-weight:bold;font-size:10pt}
.sig .sigtitle{font-size:9pt}
.pgnum{font-size:8.5pt;text-align:right;margin-bottom:4px}
@media print{body{background:#fff}.page{box-shadow:none;margin:0}.noprint{display:none}}
</style>
</head>
<body>

<div class="noprint" style="background:#1a4a7a;color:#fff;text-align:center;padding:8px 0;font-size:10.5pt">
  PLD Diagnostics – Electronic Report Verification &nbsp;&nbsp;
  <button onclick="window.print()" style="padding:3px 14px;border-radius:4px;border:none;background:#fff;font-weight:bold;cursor:pointer">🖨 Print / Save PDF</button>
</div>

<div class="page">

  <!-- TOP ROW: barcode | title | QR -->
  <div class="top">
    <div class="barcode">${barcodesSVG()}</div>
    <div class="lab-title">LABORATORY REPORT</div>
    <div class="qr-block">
      <img id="qrimg" src="https://api.qrserver.com/v1/create-qr-code/?size=72x72&data=${encodeURIComponent(pageUrl)}" alt="QR"/>
      QR Code for<br>report verification
    </div>
  </div>

  <!-- HEADER TABLE -->
  <table class="hdr">
    <tr>
      <td class="lbl">Name</td><td class="col">:</td><td class="val" colspan="3">${p.name}</td>
      <td class="lbl" style="padding-left:20px">Endo No.</td><td class="col">:</td><td>${labId}</td>
    </tr>
    <tr>
      <td class="lbl">Sex/Age</td><td class="col">:</td>
      <td class="val">${p.sex}</td>
      <td class="col">&nbsp;/&nbsp;</td>
      <td class="val">${p.age} Years &nbsp;&nbsp;&nbsp; <b>Lab Code :</b> 2188</td>
      <td class="lbl" style="padding-left:20px">Aadhar No.</td><td class="col">:</td><td></td>
    </tr>
    <tr>
      <td class="lbl">Ref. By</td><td class="col">:</td><td class="val" colspan="3"></td>
      <td class="lbl" style="padding-left:20px">Reg. Date</td><td class="col">:</td><td>${p.regDate} ${p.regTime}</td>
    </tr>
    <tr>
      <td class="lbl">Client Name</td><td class="col">:</td><td class="val" colspan="3">PLD DIAGNOSTICS BIKANER-2188</td>
      <td class="lbl" style="padding-left:20px">Sample Date</td><td class="col">:</td><td>${p.regDate} ${p.regTime}</td>
    </tr>
    <tr>
      <td></td><td></td><td colspan="3"></td>
      <td class="lbl" style="padding-left:20px">Approved On</td><td class="col">:</td><td>${p.regDate} ${p.apprTime}</td>
    </tr>
  </table>

  <!-- SECTION TITLE -->
  <div class="sec">URINE ALBUMIN/ CREATININE RATIO</div>

  <!-- RESULTS TABLE -->
  <table class="rtbl" style="margin-top:10px">
    <thead>
      <tr>
        <th style="width:44%">TEST</th>
        <th class="rc" style="width:14%">RESULT</th>
        <th style="width:10%">UNIT</th>
        <th style="width:32%">BIOLOGICAL REF RANGE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><div class="tn">MICROALBUMINUREA</div><div class="tm">Method By:- IMMUNOTURBIDIMETRIC</div></td>
        <td class="rv">${p.micro}</td>
        <td>mg/L</td>
        <td class="rr">1.00 &nbsp;-&nbsp; 29.00</td>
      </tr>
      <tr>
        <td><div class="tn">24 HR URINE FOR CREATININE</div><div class="tm">Method By:- MODIFIED JAFFE KINETIC</div></td>
        <td class="rv">${p.creat}</td>
        <td>mg/dL</td>
        <td class="rr">30.00 &nbsp;-&nbsp; 259.00</td>
      </tr>
      <tr>
        <td><div class="tn">ALBUMIN/ CREATININE RATIO</div><div class="tm">(CALC)</div></td>
        <td class="rv">${p.acr}</td>
        <td>mg/gm</td>
        <td class="rr">Normal : &lt;30,<br>Abnormal :30-300,<br>High Abnormal :&gt;300,</td>
      </tr>
    </tbody>
  </table>

  <!-- NOTES -->
  <div class="notes">
    Microalbumin is a term describing the presence of small amounts of albumin in the urine. Measurement of the microalbumin/creatinine ratio is useful as a screen for detection of minor glomerular damage, particularly in diabetic patients. The first sign of diabetic nephropathy is a persistent increase in the urine albumin excretion rate between 20-200 microgram/min (30-300 mg/day). A timed urine, either 24 hour or overnight (8-12h), if collected accurately is probably the best method for detection of microalbuminuria. However since this is often difficult for the patient, the microalbumin: creatinine ratio on a random urine is recommended as a simple screen. If the result is abnormal (&gt;30 mg/g) the test should be repeated twice within 3 months. If 2 of 3 results are abnormal with results in the range of 30-300 mg/g the patient should be referred to a nephrologist. If results are &gt;300 mg/g the patient has overt clinical nephropathy.
    <br>Note: If a patient has = 1+ proteinuria [30 mg/dL] by urine dipstick (urinalysis), overt proteinuria is present and testing for microalbuminuria is inappropriate. In this situation a urine protein: creatinine ratio or a 24 hour urine collection for total protein is appropriate.
  </div>

  <div class="endline">------------------ End Of Report ------------------</div>

  <!-- PAGE NUMBER -->
  <div class="pgnum">Page 1 of 1</div>

  <!-- FOOTER -->
  <div class="footer">
    <div class="footer-row">
      <div>
        <div>This is an Electronically Authenticated Report.</div>
        <div style="margin-top:3px">Test done from outside sample.</div>
      </div>
      <div class="sig">
        <img src="${SIG_IMG}" alt="signature"/>
        <div class="signame">Dr Bhawani Singh Tanwar</div>
        <div class="sigtitle">Pathologist</div>
      </div>
    </div>
  </div>

</div>
</body>
</html>`);
});

app.get('/', (req, res) => {
  res.send('<html><body style="font-family:Helvetica,Arial;text-align:center;padding:60px;background:#eee"><h2></body></html>');
});

app.listen(PORT, () => {
  console.log("Report server running on port " + PORT);
});
