// - เงื่อนไขในการทำ Data Validation มีดังนี้
//     - ใน Body ของ Request จะต้องมี Title และจะต้องมีความยาวไม่เกิน 35 ตัวอักษร
//     - ใน Body ของ Request  จะต้องมี Description และจะต้องมีความยาวไม่เกิน 150 ตัวอักษร
//     - ใน Body ของ Request  จะต้องมี Categories อย่างน้อย 1 อัน และ Categories จะต้องส่งมาเป็น Array
// - ถ้าไม่ผ่านเงื่อนไขใดเงื่อนไขหนึ่งให้ Return ตัว Response ออกไปจาก Middleware เพื่อแจ้ง Client ว่าข้อมูลที่บรรจุเข้ามาใน Body ไม่ถูกต้องตามเงื่อนไขที่กำหนดดังนี้
//     - ถ้า Title มีความยาวเกิน 35 ตัวอักษร ให้ Return ตัว Response ดังนี้
//     `{ message: "Title must not be over 35 characters" }`
//     - ถ้า Description มีความยาวเกิน 150 ตัวอักษร ให้ Return ตัว Response ดังนี้
//     `{ message: "Description must not exceed 150 characters" }`
//     - ถ้า Categories ไม่ใช่ Array หรือเป็น Array ที่เป็น Empty Array ให้ Return ตัว Response ดังนี้
//     `{ message: "Categories must be an array with at least 1 value" }`
export default function validateAssignmentData(req, res, next) {
  const { title, description, categories } = req.body;
  const messages = [];

  // validator logic
  if (title && title.length > 35) {
    messages.push("Title must not be over 35 characters");
  } else if (!title) {
    messages.push("Missing title");
  }

  if (description && description.length > 150) {
    messages.push("Description must not exceed 150 characters");
  } else if (!description) {
    messages.push("Missing description");
  }

  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    messages.push("Categories must be an array with at least 1 value");
  }

  // Check if there are any validation errors
  if (messages.length > 0) {
    return res.status(400).json({ messages });
  }

  next();
}