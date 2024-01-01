export interface CommunityListObject {
	id: string,
	name: string,
	description?: string,
	creatorId: string,
	createTime: string,
	color: string,
	icon: string,
	forms?: string[],
}