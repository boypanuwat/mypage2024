// AI Prompt Content
const aiContent = `# **QA + AI Playbook**

## **1. 🔥 AI เข้ามาช่วยงาน QA ตรงไหนบ้าง**

### **🧪 1.1 AI สำหรับ Test Design (Manual QA)**

AI ช่วยคิดแทนสมองเราในระดับ "Senior QA"

**Use Case:**

* Generate Test Case / Test Scenario  
* วิเคราะห์ Requirement → แตกเป็น Edge Case  
* Review Test Coverage (missing case)  
* สร้าง Negative / Boundary Case

**Impact จริง:**

* ลดเวลาเขียน Test Case 50–70%  
* เพิ่ม coverage แบบที่มนุษย์มักมองข้าม

---

### **🤖 1.2 AI สำหรับ Test Automation**

AI ไม่ได้มาแทนเรา แต่มาช่วย "เขียนเร็ว + คิดเร็ว"

**Use Case:**

* Generate Automation Script (Playwright / Cypress / API)  
* สร้าง Mock Data / Test Data  
* Debug script  
* Generate assertion / validation logic

**Impact จริง:**

* จากเขียน script 1–2 ชม. → เหลือ 10–20 นาที  
* Junior ก็ทำ Automation ได้เร็วขึ้น

---

### **📊 1.3 AI สำหรับ Test Management**

AI = ผู้ช่วย QA Lead

**Use Case:**

* สรุป Bug trend  
* วิเคราะห์ Root Cause  
* Generate Test Plan / Strategy  
* Suggest Risk-based testing

**Impact จริง:**

* ช่วยคิดเชิง strategic  
* เอาไปใช้ใน OKR / KPI ได้

---

### **🐞 1.4 AI สำหรับ Bug Analysis**

AI ช่วย "จับ pattern"

**Use Case:**

* Cluster bug (หา bug ซ้ำ)  
* วิเคราะห์ log / error message  
* Generate reproducible steps

---

### **🔗 1.5 AI สำหรับ API Testing**

ตรงสาย Boyd มาก 🔥

**Use Case:**

* Generate API test case  
* Generate Postman script / Playwright API  
* Mock request/response  
* Validate schema
`;

const aiPromptContent = `## **2. 🧠 แนวคิดการเขียน Prompt สำหรับ QA (สำคัญมาก)**

### **Rule ที่ต้องจำ:**

* ❌ อย่าพิมพ์กว้าง → AI จะมั่ว  
* ✅ ต้อง "กำหนด Role + Context + Output Format"

### **สูตรทอง:**

[Role] + [Context] + [Task] + [Output Format]`;


const aiPromptTestcase = `## **2.1. 🧪 Prompt Template: สร้าง Test Case (ตัวเด็ด)**

### **✅ Template พื้นฐาน**

You are a Senior QA Engineer.

Given the following requirement:  
[ใส่ Requirement]

Generate Test Cases with the following format:  
- Test Case ID  
- Title  
- Precondition  
- Test Steps (step-by-step)  
- Expected Result

Include:  
- Positive case  
- Negative case  
- Edge case  
- Boundary case

---

### **🔥 ตัวอย่างแบบเต็ม (ใช้ได้เลย)**
\`\`\`
คุณคือ QA Lead มืออาชีพ
ช่วยสร้าง Test Case สำหรับ [ระบบ/ฟีเจอร์: "Chat System (Niti Web V3)"]
Requirement:
1. Chat Interaction: รองรับ Text, Image (Drag & Drop), แสดง Unread Badge (Real-time), และสถานะ Read Receipt
2. Follow System: มีปุ่ม Follow/Unfollow เมื่อติดตามแล้วจะขึ้น Tag สีเหลือง "ติดตาม" ที่ชื่อลูกบ้าน
3. Contact & Search: ค้นหาด้วยเลขที่ห้องหรือชื่อได้, มีปุ่มทางลัดไปหน้าแชท, หากลูกบ้านไม่อยู่ในระบบแล้วให้แสดงสถานะ "Unknown"
4. Chat Settings: ตั้งค่าช่วงเวลาทำการ (Start-End Time) และเปิด/ปิด Auto-reply นอกเวลาทำการได้ จัดการ Admin แชทได้สูงสุด 7 คน (มี Quota Indicator X/7)
5. UI/UX: ทำงานบน V3 Interface (Sidebar สีขาว-เหลือง) ไม่ต้อง Refresh หน้าจอเพื่ออัปเดตข้อความ
ให้ออกมาในฟอร์แมตดังนี้ (ใช้ภาษาไทย):
TC-[หมวด]-[รันนัมเบอร์]
Test area: [Web,App]
Title: [ชื่อ Test Case]
Description: [เขียนแบบ Given/When/Then ในประโยคเดียว เช่น "เมื่อ.. แล้ว.."]
Preconditions: [เงื่อนไขก่อนการทดสอบ]
Priority: [High / Medium / Low]
Test Steps:
1. [ขั้นตอนที่ 1]
2. [ขั้นตอนที่ 2]
3. [ขั้นตอนที่ 3]
Test Data: [ข้อมูลทดสอบ เช่น วันที่ เวลา หรือข้อมูลอินพุต]
Expected Result: [ผลลัพธ์ที่คาดหวัง]
Type: [Smoke / Regression / non Regression] (มี 3 type เท่านั้น)
Automation Status: [Manual / To be automated] (มี 2 type เท่านั้น)
สร้าง Test case ให้ครอบคลุม Positive, Negative (เช่น การเพิ่ม Admin คนที่ 8, การส่งไฟล์ที่ไม่ใช่รูปภาพ, การส่งข้อความนอกเวลาทำการ)
ทำตาราง Excel-friendly format ให้ครบทุก Test Case ที่สร้างไว้ โดยมี Columns ตามนี้:
(TC ID, Test area, Title, Description, Preconditions, Priority, Test Steps, Test Data, Expected Result, Type, Automation Status)
\`\`\`
`;
