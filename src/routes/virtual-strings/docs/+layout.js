export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "Docs" + " - " + result.title
  return result;
}