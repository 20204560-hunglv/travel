const cityLabels = 
[
  { label: 'Bắc Giang', value: 'bacgiang' },
  { label: 'Bắc Kạn', value: 'backan' },
  { label: 'Cao Bằng', value: 'caobang' },
  { label: 'Hà Giang', value: 'hagiang' },
  { label: 'Lạng Sơn', value: 'langson' },
  { label: 'Phú Thọ', value: 'phutho' },
  { label: 'Quảng Ninh', value: 'quangninh' },
  { label: 'Thái Nguyên', value: 'thainguyen' },
  { label: 'Tuyên Quang', value: 'tuyenquang' },
  { label: 'Yên Bái', value: 'yenbai' },
  { label: 'Điện Biên', value: 'dienbien' },
  { label: 'Hòa Bình', value: 'hoabinh' },
  { label: 'Lai Châu', value: 'laichau' },
  { label: 'Sơn La', value: 'sonla' },
  { label: 'Bắc Ninh', value: 'bacninh' },
  { label: 'Hà Nam', value: 'hanam' },
  { label: 'Hải Dương', value: 'haiduong' },
  { label: 'Hưng Yên', value: 'hungyen' },
  { label: 'Nam Định', value: 'namdinh' },
  { label: 'Ninh Bình', value: 'ninhbinh' },
  { label: 'Thái Bình', value: 'thaibinh' },
  { label: 'Vĩnh Phúc', value: 'vinhphuc' },
  { label: 'Hà Nội', value: 'hanoi' },
  { label: 'Hải Phòng', value: 'haiphong' },
  { label: 'Hà Tĩnh', value: 'hatinh' },
  { label: 'Nghệ An', value: 'nghean' },
  { label: 'Quảng Bình', value: 'quangbinh' },
  { label: 'Quảng Trị', value: 'quangtri' },
  { label: 'Thanh Hóa', value: 'thanhhoa' },
  { label: 'Thừa Thiên-Huế', value: 'thuathienhue' },
  { label: 'Đắk Lắk', value: 'daklak' },
  { label: 'Đắk Nông', value: 'daknong' },
  { label: 'Gia Lai', value: 'gialai' },
  { label: 'Kon Tum', value: 'kontum' },
  { label: 'Lâm Đồng', value: 'lamdong' },
  { label: 'Bình Định', value: 'binhdinh' },
  { label: 'Bình Thuận', value: 'binhthuan' },
  { label: 'Khánh Hòa', value: 'khanhhoa' },
  { label: 'Ninh Thuận', value: 'ninhthuan' },
  { label: 'Phú Yên', value: 'phuyen' },
  { label: 'Quảng Nam', value: 'quangnam' },
  { label: 'Quảng Ngãi', value: 'quangngai' },
  { label: 'Đà Nẵng', value: 'danang' },
  { label: 'Bà Rịa-Vũng Tàu', value: 'bariavungtau' },
  { label: 'Bình Dương', value: 'binhduong' },
  { label: 'Bình Phước', value: 'binhphuoc' },
  { label: 'Đồng Nai', value: 'dongnai' },
  { label: 'Tây Ninh', value: 'tayninh' },
  { label: 'Hồ Chí Minh', value: 'hochiminh' },
  { label: 'An Giang', value: 'angiang' },
  { label: 'Bạc Liêu', value: 'baclieu' },
  { label: 'Bến Tre', value: 'bentre' },
  { label: 'Cà Mau', value: 'camau' },
  { label: 'Đồng Tháp', value: 'dongthap' },
  { label: 'Hậu Giang', value: 'haugiang' },
  { label: 'Kiên Giang', value: 'kiengiang' },
  { label: 'Long An', value: 'longan' },
  { label: 'Sóc Trăng', value: 'soctrang' },
  { label: 'Tiền Giang', value: 'tiengiang' },
  { label: 'Trà Vinh', value: 'travinh' },
  { label: 'Vĩnh Long', value: 'vinhlong' },
  { label: 'Cần Thơ', value: 'cantho' }
]

// [
  // "Bắc Giang",
  // "Bắc Kạn",
  // "Cao Bằng",
  // "Hà Giang",
  // "Lạng Sơn",
  // "Phú Thọ",
  // "Quảng Ninh",
  // "Thái Nguyên",
  // "Tuyên Quang",
  // "Yên Bái",
  // "Điện Biên",
  // "Hòa Bình",
  // "Lai Châu",
  // "Sơn La",
  // "Bắc Ninh",
  // "Hà Nam",
  // "Hải Dương",
  // "Hưng Yên",
  // "Nam Định",
  // "Ninh Bình",
  // "Thái Bình",
  // "Vĩnh Phúc",
  // "Hà Nội",
  // "Hải Phòng",
  // "Hà Tĩnh",
  // "Nghệ An",
  // "Quảng Bình",
  // "Quảng Trị",
  // "Thanh Hóa",
  // "Thừa Thiên-Huế",
  // "Đắk Lắk",
  // "Đắk Nông",
  // "Gia Lai",
  // "Kon Tum",
  // "Lâm Đồng",
  // "Bình Định",
  // "Bình Thuận",
  // "Khánh Hòa",
  // "Ninh Thuận",
  // "Phú Yên",
  // "Quảng Nam",
  // "Quảng Ngãi",
  // "Đà Nẵng",
  // "Bà Rịa-Vũng Tàu",
  // "Bình Dương",
  // "Bình Phước",
  // "Đồng Nai",
  // "Tây Ninh",
  // "Hồ Chí Minh",
  // "An Giang",
  // "Bạc Liêu",
  // "Bến Tre",
  // "Cà Mau",
  // "Đồng Tháp",
  // "Hậu Giang",
  // "Kiên Giang",
  // "Long An",
  // "Sóc Trăng",
  // "Tiền Giang",
  // "Trà Vinh",
  // "Vĩnh Long",
  // "Cần Thơ",
// ];
export default cityLabels;
