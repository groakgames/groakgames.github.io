export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "Modules" + " - " + result.title
  return result;
}