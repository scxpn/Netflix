const API_KEY = '5a57377b955837ad45182fc9c520c90c';
const API_BASE ='https://api.themoviedb.org/3';


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default{
    getHomeList: async() => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title:'Recomendados para Você',
                items: []
            },
            {
                slug: 'toprated',
                title:'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title:'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title:'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title:'Terror',
                items: []
            },
            {
                slug: 'romance',
                title:'Romance',
                items: []
            },
            {
                slug: 'documentary',
                title:'Documentários',
                items: []
            }
        ];
    }
}