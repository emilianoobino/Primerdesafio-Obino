class ProductManager {
  static autoIncrementId = 0;
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios");
        return;
      }
  
      
      if (this.products.some(item => item.code === code)) {
        console.error("El código ya está en uso");
        return;
      }
  
    
      const newProduct = {
        id: ++ProductManager.autoIncrementId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      }
  
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(item => item.id === id);
  
      if (!product) {
        console.log ("Not found");
      } else {
        console.log ("producto encontrado", product);
      }
    }
  }
  
  
  const manager = new ProductManager();

  console.log(manager.getProducts());
  
  manager.addProduct("funko 1", "spiderman", 1500, "thumbnail1.jpg", "abc123", 50);
  manager.addProduct("funko 2", "batman", 1700, "thumbnail2.jpg", "abc124", 80);
  
  console.log(manager.getProducts());

  manager.getProductById(2);
  
  