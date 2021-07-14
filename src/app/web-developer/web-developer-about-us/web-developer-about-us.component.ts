import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-developer-about-us',
  templateUrl: './web-developer-about-us.component.html',
  styleUrls: ['./web-developer-about-us.component.css']
})
export class WebDeveloperAboutUsComponent implements OnInit {

  profile : any = {
                  logo:"logo.png",
                  profile:"web-developer"
            };

  page_banner : any = {
        title:"Sobre mí",
        profile:"web-developer",
  };

  page_info : any = {
                title:"Que es lo que hago",
                image:"pic1.jpg",
                description:"Me dedicó a desarrollar todo tipo de aplicaciones, ya sean App Móviles, Paginas Web, Back-end. Me apasiona trabajar en tecnología y tomar retos para poder saciar las ganas de crecer. Actualmente la mayor parte del tiempo desarrollo bajo tecnologías Js y Ts, aunque he participados en varios proyectos PHP, Python y muchas más tecnologías. Soy un perfil bastante abierto que se siente cómodo en aprender por su cuenta todo lo que sea necesario."
          };

  member : any = {
        image:"",
        logo:"",
        designation:"",
        age:"29",
        dob:"",
        residence:"CHILE",
        address:"GERONIMO DE ALDERETE 1056, CARAHUE",
        email:"FABIANLUQUE2014@GMAIL.COM",
        phone:"+56 9 7475 7107",
        skype:"",
        whatsapp:"",
        about_me:"",
        intrests:"",
        name:"",
        study:"",
        highes_degree:"",
        profile:"web-developer"
  };


  services : any = [
                  {
                    title:"DESARROLLO MÓVIL",
                    description:"Si tienes en mente una aplicación única o una necesaria para tu proyecto, la podemos hacer realidad, ya sea, que necesites una App Hibrida o Móvil cuento con el conocimiento en Ionic o Flutter para lograr tú objetivo.",
                  },
                  {
                    title:"DESARROLLO WEB",
                    description:"La pagina Web que siempre has deseado para tener presencia en Internet o simplemente para presentar tu proyecto o emprendimiento la podemos lograr juntos, ya sea desde una SPA o un Sistema Web podemos llevarla a cabo con Angular, React o Wordpress.",
                  },
                  {
                    title:"DESARROLLO API",
                    description:"Necesitas disponibilizar datos o generar una base de datos para que tus colaboradores consuman tu información? Puedo modelar la base de datos según tu lógica de negocio y disponibilizar su información.",
                  },
                  {
                    title:"CLOUD",
                    description:"Si ya cuentas con una Web/API/Back-end te puedo ayudar a montarlo en un servidor, ya sea, AWS, Google Cloud o un proveedor de hosting.",
                  },
              ];
  fun_facts : any = [
                  {
                    number:"10530",
                    title:"HORAS TRABAJADAS",
                  },
                  {
                    number:"15",
                    title:"PROYECTOSS COMPLETADOS",
                  },
                  {
                    number:"5",
                    title:"AÑOS DE EXPERIENCIA",
                  }
              ];
  testimonials : any = [
                  {
                    client_name:"Rodrigo Alejandro",
                    image:"pic1.jpg",
                    designation:"Developer / Colega",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"Cristobal Maldonado",
                    image:"pic3.jpg",
                    designation:"Jefe Desarrollo",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  },
                  {
                    client_name:"Fernanda Delgado",
                    image:"pic2.jpg",
                    designation:"Pareja",
                    description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look.",
                  }
              ];
  our_clients : any = [
                  {
                    client_title:"",
                    logo:"logo5.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo3.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                   client_title:"",
                    logo:"logo1.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo2.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo6.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo4.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo5.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo6.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo1.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo2.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo6.jpg",
                    link:"javascript:void(0);",
                  },
                  {
                    client_title:"",
                    logo:"logo4.jpg",
                    link:"javascript:void(0);",
                  },
              ];

  constructor() { }

  ngOnInit(): void {
  }

}
