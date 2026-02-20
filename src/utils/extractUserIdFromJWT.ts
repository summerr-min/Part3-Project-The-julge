function base64UrlDecode(base64Url: string) {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const padding = base64.length % 4 === 0 ? 0 : 4 - (base64.length % 4);
  const paddedBase64 = base64 + '=='.substring(0, padding);
  return atob(paddedBase64);
}

function extractUserIdFromJWT(jwtToken: string) {
  const parts = jwtToken.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format');
  }
  const payload = parts[1];
  const decodedPayload = base64UrlDecode(payload);
  const parsedPayload = JSON.parse(decodedPayload);
  return <string>parsedPayload.userId;
}

export default extractUserIdFromJWT;
