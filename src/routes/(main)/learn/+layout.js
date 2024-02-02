export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "Learn" + " - " + result.title
  return result;
}