export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "Tools" + " - " + result.title
  return result;
}