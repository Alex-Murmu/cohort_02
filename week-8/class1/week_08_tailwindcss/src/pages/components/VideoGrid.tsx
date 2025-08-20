import VideoCard from "./VideoCard"


const VIDEOS = [
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },{
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100 M",
        timestamp:"13 days ago"

    },
    {
        title:"Learn coding in 30 days",
        author:"Alex Murmnu",
        image:"thumbnail.png",
        views:"100m",
        timestamp:"13 days ago"

    },
]


export const  VideoGrid = () =>{
 return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
   {VIDEOS.map((video, idx) => (
  <div key={idx}>
    <VideoCard 
      title={video.title}
      author={video.author}
      image={video.image}
      timestamp={video.timestamp}
      views={video.views}
    />
  </div>
))}

 </div>
}