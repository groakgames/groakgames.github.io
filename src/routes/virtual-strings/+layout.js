export const load = async ({ parent }) => {
	var parentData = await parent()
	return {
		...parentData,
		title: "VirtualStrings",
		description: "VirtualStrings VTuber software",
		icon: "/assets/icons/virtualstrings.svg",
		header: {
			title: "VirtualStrings",
			link: "/virtual-strings",
			navigation: [
				{ name:"docs", link:"/virtual-strings/docs" },
				{ name:"modules", link:"/virtual-strings/modules" }
			]
		}
	};
};