export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "Games" + " - " + result.title
  return result;
}