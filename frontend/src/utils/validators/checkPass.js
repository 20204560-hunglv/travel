export default function checkPass(pass) {
  if (pass.length < 8) throw new Error("Mật khẩu dưới 8 ký tự");
}
