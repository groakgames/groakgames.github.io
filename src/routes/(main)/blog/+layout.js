export const load = async ({ parent }) =>{
  const result = await parent();
  result.title = "Blog" + " - " + result.title
  return result;
}