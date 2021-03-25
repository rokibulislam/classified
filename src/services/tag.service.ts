import Tag from '../models/tag'
const { stringToBase64, base64ToString  } = require('../helper/index')

interface Iquery {
    _id?: any
}

class TagService {

    public getTags = async ( cursor : any, limit : any, sortBy: string ,order: string ) => {
        try {
            const query: Iquery  = { }

            if (cursor) {
                query['_id'] = {
                    '$lt': base64ToString(cursor)
                }
            }

            let lim = parseInt( limit ) + 1

            let tags =  await Tag.find().sort({ _id: -1 }).limit( lim );

            const hasNextPage = tags.length > limit;
            tags = hasNextPage ? tags.slice(0, -1) : tags;

            return {
                tagFeed: tags,
                pageInfo : {
                    nextPageCursor: hasNextPage ? stringToBase64(tags[tags.length - 1].id) : null,
                    hasNextPage: hasNextPage
                }
            }
            
        } catch( error ) {

        }
    }

    public getTag = async ( id: string ) : Promise<any> => {
        try {
            let tag =  await Tag.findById(id)
            return tag
        } catch( error ) {

        }
    }

    public createTag = async ( input: any ) : Promise<any> => {
        try {
            let tag = new Tag({ ...input});
            let result = await tag.save();
        
            return result
        } catch( error ) {

        }
    }

    public updateTag = async (id: string, post: any): Promise<any> => { 
        try {
            let tag = await Tag.findOneAndUpdate( { _id: id }, post, { new: true } )
            return tag
        } catch( error ) {

        }
    }

    public deleteTag = async ( id: string ) : Promise<any> => {
        try {
            let tag = await Tag.findOneAndDelete( { _id: id } )
            return tag
        } catch( error ) {

        }
    }

    public getbatchTags = async ( tagIds : any) : Promise<any> => {
        try {
            // console.log('keys====', userIds);
            const tags = await Tag.find({ _id: { $in: tagIds } });
            return tags;
            // return userIds.map(userId => users.find(user => user.id === userId));
        } catch( error ) {

        }
    }

    public bulkdeleteTag = async ( id: string ) => {
        try {
            let tag = await Tag.deleteMany({ _id: id })
            return tag
        } catch( error ) {

        }
    }
}

export default new TagService()