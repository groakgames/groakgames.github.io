export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "About" + " - " + result.title
  return result;
}