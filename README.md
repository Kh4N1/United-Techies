
**Departments and Modules**

**Inventory Department**

- Parts Inventory Management Module
  - Parts (part\_id, name, supplier, price, quantity, received\_date)
- Finished Products Inventory Management Module
  - Products (product\_id, name, category, price, quantity)

**Purchasing Department**

- Supplier Management Module
  - Suppliers (supplier\_id, name, contact\_info)
- Parts Purchase Orders Module
  - PurchaseOrders (order\_id, part\_id, supplier\_id, quantity, order\_date, expected\_delivery\_date)

**Sales Department**

- Customer Orders Management Module
  - CustomerOrders (order\_id, customer\_id, product\_id, quantity, order\_date, delivery\_deadline)
- Customer Management Module
  - Customers (customer\_id, name, contact\_info)

**Production Department**

- Production Scheduling Module
  - ProductionSchedule (schedule\_id, product\_id, start\_date, end\_date, quantity)
- Production Line Management Module
  - ProductionLine (line\_id, product\_id, status, start\_date, end\_date)

**Finance Department**

- Cost Management Module
  - Costs (cost\_id, part\_id, product\_id, cost\_type, amount, date)
- Final Product Pricing Module
  - Pricing (pricing\_id, product\_id, base\_price, markup\_percentage, final\_price)



**Interdepartmental and Module Connections**

**Inventory and Production:** Parts inventory is transferred from the Inventory Department to the Production Department. Parts inventory is used for production scheduling and production line management.

**Inventory and Sales:** Finished products inventory is used to fulfill customer orders from the Inventory Department.

**Purchasing and Inventory:** Parts purchase orders are added to the parts inventory in the Inventory Department upon receipt.

**Sales and Production:** Customer orders are sent to production scheduling and the production line to produce the required products.

**Finance and All Departments:** Cost management and final product pricing are conducted based on the information provided by all departments.

**Entity Relationships:**

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



**Flows and Possible Operations in Departments**

**Inventory Department**

1) Parts Inventory Management:
   1) Add new parts to inventory
   1) Update parts inventory
   1) Remove parts from inventory
1) Finished Products Inventory Management:
   1) Add finished products to inventory
   1) Update product inventory
   1) Remove products from inventory

**Purchasing Department**

1) Supplier Management:
   1) Add new supplier
   1) Update supplier information
   1) Remove supplier
1) Parts Purchase Orders:
   1) Create new purchase order
   1) Update purchase order
   1) Track purchase order status

**Sales Department**

1) Customer Orders Management:
   1) Create new order
   1) Update order
   1) Track order status
1) Customer Management:
1) Add new customer
1) Update customer information
1) Remove customer

**Production Department**

1) Production Scheduling:
   1) Create new production schedule
   1) Update production schedule
   1) Track production status
1) Production Line Management:
   1) Start product production
   1) Monitor production line status
   1) Complete product production

**Finance Department**

1) Cost Management:
   1) Record costs related to parts and products
   1) Calculate final costs
1) Final Product Pricing:
   1) Set base product prices
   1) Add profit margin percentage
   1) Calculate final prices

