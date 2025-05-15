export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const {
    length = 12,
    uppercase = 'true',
    lowercase = 'true',
    digits = 'true',
    special_chars = 'true'
  } = req.query;

  const len = Math.min(Math.max(parseInt(length), 4), 64);
  let chars = '';

  if (uppercase === 'true') chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase === 'true') chars += 'abcdefghijklmnopqrstuvwxyz';
  if (digits === 'true') chars += '0123456789';
  if (special_chars === 'true') chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';

  if (!chars) {
    return res.status(400).json({ error: 'Nenhum tipo de caractere selecionado' });
  }

  let password = '';
  for (let i = 0; i < len; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return res.status(200).json({ password });
}
