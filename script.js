// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (ít nhất 5 SP, tối thiểu 2 danh mục)
const products = [
    new Product(1, "iPhone 15 Pro", 25000000, 10, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 20000000, 15, "Electronics", true),
    new Product(3, "MacBook Pro M3", 45000000, 5, "Electronics", false),
    new Product(4, "Leather Wallet", 500000, 0, "Accessories", true),
    new Product(5, "Wireless Earbuds", 3000000, 20, "Accessories", true),
    new Product(6, "Smart Watch", 35000000, 8, "Electronics", true),
    new Product(7, "Designer Handbag", 12000000, 3, "Accessories", false)
];

// Hàm hiển thị kết quả
function showResult(title, data) {
    const resultDiv = document.getElementById('result');
    const content = typeof data === 'object' 
        ? JSON.stringify(data, null, 2) 
        : data;
    resultDiv.textContent = `// ${title}\n\n${content}`;
}

// Câu 3: Tạo mảng mới chỉ chứa name, price
function handleCau3() {
    const result = products.map(p => ({
        name: p.name,
        price: p.price
    }));
    showResult("Câu 3: Mảng chứa name và price của mỗi sản phẩm", result);
}

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
function handleCau4() {
    const result = products.filter(p => p.quantity > 0);
    showResult("Câu 4: Các sản phẩm còn hàng trong kho", result);
}

// Câu 5: Kiểm tra có ít nhất 1 SP giá trên 30 triệu
function handleCau5() {
    const hasExpensive = products.some(p => p.price > 30000000);
    const message = hasExpensive 
        ? " CÓ - Có ít nhất một sản phẩm có giá trên 30 triệu"
        : " KHÔNG - Không có sản phẩm nào có giá trên 30 triệu";
    showResult("Câu 5: Kiểm tra sản phẩm giá > 30 triệu", message);
}

// Câu 6: Kiểm tra tất cả Accessories có đang bán không
function handleCau6() {
    const allAvailable = products
        .filter(p => p.category === "Accessories")
        .every(p => p.isAvailable === true);
    
    const message = allAvailable
        ? " ĐÚNG - Tất cả sản phẩm Accessories đều đang được bán"
        : " SAI - Có sản phẩm Accessories không được bán";
    
    showResult("Câu 6: Kiểm tra tất cả Accessories có đang bán", message);
}

// Câu 7: Tính tổng giá trị kho hàng
function handleCau7() {
    const total = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    const message = `Tổng giá trị kho hàng: ${total.toLocaleString('vi-VN')} VNĐ`;
    showResult("Câu 7: Tổng giá trị kho hàng (price × quantity)", message);
}

// Câu 8: Dùng for...of để duyệt và in thông tin
function handleCau8() {
    let output = "";
    for (const p of products) {
        const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
        output += `${p.name} - ${p.category} - ${status}\n`;
    }
    showResult("Câu 8: Duyệt mảng bằng for...of", output.trim());
}

// Câu 9: Dùng for...in để in thuộc tính
function handleCau9() {
    let output = "Thuộc tính của sản phẩm đầu tiên:\n\n";
    for (const key in products[0]) {
        output += `${key}: ${products[0][key]}\n`;
    }
    showResult("Câu 9: Duyệt thuộc tính bằng for...in", output.trim());
}

// Câu 10: Lấy danh sách tên SP đang bán và còn hàng
function handleCau10() {
    const result = products
        .filter(p => p.isAvailable && p.quantity > 0)
        .map(p => p.name);
    showResult("Câu 10: Tên các sản phẩm đang bán và còn hàng", result);
}

// Xóa kết quả
function clearResult() {
    document.getElementById('result').textContent = "// Chọn một chức năng để xem kết quả...";
}