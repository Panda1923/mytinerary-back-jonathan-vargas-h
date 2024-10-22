import "dotenv/config.js"
import '../../config/database.js'
import City from "../City.js";



let Cities = [
        { id: 1, name: 'Bangkok', description: 'One of the most well-known Asian cities, Bangkok stands out for its red light districts, lively nightlife, and delicious street food.', imageUrl: 'https://th.bing.com/th/id/R.42cb4fcdeabc1cbbf89666948a3b07fb?rik=pWnYNXgOlS3l2g&riu=http%3a%2f%2fimagenesdepaisajes.org%2fwp-content%2fuploads%2f2016%2f07%2fpaisajes-mas-hermosos-del-mundo-costa.jpg&ehk=QuXqZBP%2bkT%2bexcOg4SMFrrUfvy99UMyK1dAyMFYXj6g%3d&risl=&pid=ImgRaw&r=0' },
        { id: 2, name: 'Perú', description: 'Peru awaits you with open arms!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190306/Peru1.jpg' },
        { id: 3, name: 'Nueva zelanda', description: 'Discover the magic of New Zealand!.', imageUrl: 'https://cdn1.intriper.com/wp-content/uploads/2019/06/20192847/Nueva-zelanda-1024x563.jpg' },
        { id: 4, name: 'Austria', description: 'Come and fall in love with Austria!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191248/Austria.jpg' },
        { id: 5, name: 'Canada', description: 'Find out why Canada is the perfect destination!', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191208/canada.jpg' },
        { id: 6, name: 'Noruega', description: 'Immerse yourself in the culture and beauty of Noruega!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191151/noruega.jpg' },
        { id: 7, name: 'Mauricio', description: 'Make Mauricio your next travel destination!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191118/Mauricio.jpg' },
        { id: 8, name: 'Grecia', description: 'Grecia awaits you with open arms!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13191017/grecia.jpg' },
        { id: 9, name: 'Namibia', description: 'Find out why Namibia is the perfect destination!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190945/Namibia.jpg' },
        { id: 10, name: 'Nueva York', description: 'Discover the magic of New York!.', imageUrl: 'https://th.bing.com/th/id/OIP.bP4IEtxA3iBTrHO8XCQDLAHaE7?rs=1&pid=ImgDetMain' },
        { id: 11, name: 'Finlandia', description: 'Find out why Finlandia is the perfect destination!', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190932/Finlandia.jpg' },
        { id: 12, name: 'Chile', description: 'Immerse yourself in the culture and beauty of chile!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190916/Chile.jpg' },
        { id: 13, name: 'Filipinas', description: 'Come and fall in love with Filipinas!', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190839/Filipinas.jpg' },
        { id: 14, name: 'Croacia', description: 'Discover the magic Croacia!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190820/Croacia.jpg' },
        { id: 15, name: 'Portugal', description: 'Come and fall in love with Portugal!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190800/portugal.jpg' },
        { id: 16, name: 'Chipre', description: 'Find out why Chipre is the perfect destination!', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190741/Chipre.jpg' },
        { id: 17, name: 'Venezuela', description: 'Make Venezuela your next travel destination!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190722/Venezuela.jpg' },
        { id: 18, name: 'Botsuana', description: 'Venture into Botsuana and live unforgettable experiences!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190703/Botsuana.jpg' },
        { id: 19, name: 'Brasil', description: 'Make Brasil your next travel destination!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190608/Brasil.jpg' },
        { id: 20, name: 'Malasia', description: 'Find out why Malasia is the perfect destination!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190347/malasia.jpg' },
        { id: 21, name: 'Argentina', description: 'Come and fall in love with Aegentina!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190422/Argentina.jpg' },
        { id: 22, name: 'Sri Lanka', description: 'Venture into Sri Lanka and live unforgettable experiences!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/09154855/1.-Sri-Lanka.jpg' },
        { id: 23, name: 'Sudáfrica', description: 'Make Sudafrica your next travel destination!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190508/Sudafrica.jpg' },
        { id: 24, name: 'Nepal', description: 'Venture into Nepal and live unforgettable experiences!.', imageUrl: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/13190623/Nepal.jpg' },
    ];

    City.insertMany(Cities)