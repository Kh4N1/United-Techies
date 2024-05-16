**دپارتمان‌ها و ماژول‌ها**

**دپارتمان انبار (Inventory Department)**

- **ماژول مدیریت موجودی قطعات (Parts Inventory Management)**
  - Parts (part\_id, name, supplier, price, quantity, received\_date)
- **ماژول مدیریت موجودی محصولات نهایی (Finished Products Inventory Management)**
  - Products (product\_id, name, category, price, quantity)

**دپارتمان خرید (Purchasing Department)**

- **ماژول مدیریت تأمین‌کنندگان (Supplier Management)**
  - Suppliers (supplier\_id, name, contact\_info)
- **ماژول سفارش خرید قطعات (Parts Purchase Orders)**
  - PurchaseOrders (order\_id, part\_id, supplier\_id, quantity, order\_date, expected\_delivery\_date)

**دپارتمان فروش (Sales Department)**

- **ماژول مدیریت سفارشات مشتری (Customer Orders Management)**
  - CustomerOrders (order\_id, customer\_id, product\_id, quantity, order\_date, delivery\_deadline)
- **ماژول مدیریت مشتریان (Customer Management)**
  - Customers (customer\_id, name, contact\_info)

**دپارتمان تولید (Production Department)**

- **ماژول برنامه‌ریزی تولید (Production Scheduling)**
  - ProductionSchedule (schedule\_id, product\_id, start\_date, end\_date, quantity)
- **ماژول مدیریت خط تولید (Production Line Management)**
  - ProductionLine (line\_id, product\_id, status, start\_date, end\_date)

**دپارتمان مالی (Finance Department)**

- **ماژول مدیریت هزینه‌ها (Cost Management)**
  - Costs (cost\_id, part\_id, product\_id, cost\_type, amount, date)
- **ماژول قیمت‌گذاری محصولات نهایی (Final Product Pricing)**
  - Pricing (pricing\_id, product\_id, base\_price, markup\_percentage, final\_price)

**ارتباط بین دپارتمان‌ها و ماژول‌ها**

- **انبار و تولید:** موجودی قطعات از دپارتمان انبار به دپارتمان تولید منتقل می‌شود. موجودی قطعات برای برنامه‌ریزی تولید و مدیریت خط تولید استفاده می‌شود.
- **انبار و فروش:** موجودی محصولات نهایی از انبار برای تکمیل سفارشات مشتری استفاده می‌شود.
- **خرید و انبار:** سفارشات خرید قطعات پس از دریافت به موجودی قطعات در انبار اضافه می‌شود.
- **فروش و تولید:** سفارشات مشتری به برنامه‌ریزی تولید و خط تولید ارسال می‌شود تا محصولات مورد نیاز تولید شوند.
- **مالی و همه دپارتمان‌ها:** مدیریت هزینه‌ها و قیمت‌گذاری محصولات نهایی بر اساس اطلاعات ارائه شده از تمامی دپارتمان‌ها انجام می‌شود.


1. Suppliers (1) <--> (M) Parts
1. Suppliers (1) <--> (M) PurchaseOrders
1. Parts (1) <--> (M) PurchaseOrders
1. Parts (1) <--> (M) ProductionLine
1. Products (1) <--> (M) CustomerOrders
1. Customers (1) <--> (M) CustomerOrders
1. Products (1) <--> (M) ProductionSchedule
1. Products (1) <--> (M) ProductionLine
1. Products (1) <--> (1) Pricing
1. Parts (1) <--> (M) Costs
1. Products (1) <--> (M) Costs












**فلوها و عملیات ممکن در دپارتمان‌ها**

**دپارتمان انبار**

1) **مدیریت موجودی قطعات:**
   1) افزودن قطعات جدید به انبار
   1) بروزرسانی موجودی قطعات
   1) حذف قطعات از انبار
1) **مدیریت موجودی محصولات نهایی:**
   1) افزودن محصولات نهایی به انبار
   1) بروزرسانی موجودی محصولات
   1) حذف محصولات از انبار

**دپارتمان خرید**

1) **مدیریت تأمین‌کنندگان:**
   1) افزودن تأمین‌کننده جدید
   1) بروزرسانی اطلاعات تأمین‌کننده
   1) حذف تأمین‌کننده
1) **سفارش خرید قطعات:**
   1) ایجاد سفارش خرید جدید
   1) بروزرسانی سفارش خرید
   1) پیگیری وضعیت سفارش خرید

**دپارتمان فروش**

1) **مدیریت سفارشات مشتری:**
   1) ایجاد سفارش جدید
   1) بروزرسانی سفارش
   1) پیگیری وضعیت سفارش
1) **مدیریت مشتریان:**
   1) افزودن مشتری جدید
   1) بروزرسانی اطلاعات مشتری
   1) حذف مشتری



**دپارتمان تولید**

1) **برنامه‌ریزی تولید:**
   1) ایجاد برنامه تولید جدید
   1) بروزرسانی برنامه تولید
   1) پیگیری وضعیت تولید
1) **مدیریت خط تولید:**
   1) شروع تولید محصول
   1) نظارت بر وضعیت خط تولید
   1) اتمام تولید محصول

**دپارتمان مالی**

1) **مدیریت هزینه‌ها:**
   1) ثبت هزینه‌های مربوط به قطعات و محصولات
   1) محاسبه هزینه‌های نهایی
1) **قیمت‌گذاری محصولات نهایی:**
   1) تعیین قیمت پایه محصولات
   1) افزودن درصد سود
   1) محاسبه قیمت نهایی
