import type { CommunityListObject } from '../types/community';

const group1: CommunityListObject = {
	id: "1",
	name: "test",
	creatorId: "123",
	createTime: "2018-10-10",
	color: "#be185d",
	icon: "img.png",
	forms: ["1", "2", "3"],
}

const group2: CommunityListObject = {
	id: "2",
	name: "test2",
	creatorId: "123",
	description: "test",
	createTime: "2018-10-10",
	color: "#e879f9",
	icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
	forms: ["1", "2", "3"],
}

const group3: CommunityListObject = {
	id: "3",
	name: "test3",
	creatorId: "123",
	description: "test",
	createTime: "2018-10-10",
	color: "#059669",
	icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
	forms: ["1", "2", "3"],
}

export const communityListObjects: CommunityListObject[] = [
	group1,
	group2,
	group3,
]