import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-developer-resume',
  templateUrl: './web-developer-resume.component.html',
  styleUrls: ['./web-developer-resume.component.css']
})
export class WebDeveloperResumeComponent implements OnInit {

  profile : any = {
                  logo:"logo.png",
                  profile:"web-developer"
            };

  page_banner : any = {
        title:"RESUMEN",
        profile:"web-developer",
  };

  member : any = {
        image:"user-img-9.jpg",
        logo:"",
        designation:"",
        age:" 24",
        dob:" 7 Junio",
        residence:" CHILE",
        address:" CARAHUE, CHILE",
        email:" FABIANLUQUE2014@GMAIL.COM",
        phone:" (+56) 9 7475 7107",
        whatsapp:"",
        about_me:'Hola! Mi nombre es <span class="text-primary">Fabian Luque</span>. Soy un desarrollador muy apacianado y dedicado en mi trabajo. Con 5 años de experiencia como Desarrollador Full Stack profesional, he adquirido las habilidades y el conocimiento necesario para que su proyecto sea un éxito.',
        intrests:" GAMING, CONDING, STREAM",
        name:"Fabian Luque",
        study:" Intituto profesional AIEP",
        highes_degree:" SR",
        profile:"web-developer"
  };

  skills : any = [
                  {
                    title:"Angular",
                    score:"90",
                  },
                  {
                    title:"Node.js",
                    score:"85",
                  },
                  {
                    title:"TypeScript",
                    score:"85",
                  },
                  {
                    title:"Flutter",
                    score:"65",
                  },
                  {
                    title:"Python",
                    score:"57",
                  },

              ];

  education : any = [
                  {
                    title:"Fronted Development",
                    year:"2019",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Graphic Design",
                    year:"2014",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Senior Ui/Ux Designer",
                    year:"2012",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
                  {
                    title:"Junior Ui/Ux Designer",
                    year:"2011",
                    organization_name:"University of Studies",
                    description:"Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
                  },
              ];
  experience : any = [
                  {
                    title:"Desarrollador Full-Stack Sr",
                    year:"2021",
                    organization_name:"Acid Labs",
                    description:"Doble rol de desarrollador Full-Stack y Lider de célula de desarrollo en la actualización de la nueva web personas del Bando del Estado.",
                  },
                  {
                    title:"Desarrollador Full-Stack Sr",
                    year:"2019",
                    organization_name:"Global Conexus",
                    description:"Me desenvolví como desarrollador Full-Stack en proyectos de indicadores, bancarios y de envío masivo de correos, SMS, WhatsApp.",
                  },
                  {
                    title:"Desarrollador Full-Stack",
                    year:"2019",
                    organization_name:"Wingsoft",
                    description:"Me desenvolví como desarrollador Full-Stack y líder de proyectos para diferentes clientes, trabajando con tecnologías como React, Node, Python, PHP.",
                  },
                  {
                    title:"Desarrollador Full-Stack",
                    year:"2018",
                    organization_name:"GoFeels",
                    description:"Me desenvolví como desarrollador Full-Stack con Angular y Laravel en el rubro hotelero.",
                  },
                  {
                    title:"Desarrollador Jr",
                    year:"2017",
                    organization_name:"Tecinco",
                    description:"Primera experiencia en el desarrollo profesional en donde aprendí las bases necesarias para llevar a cabo un proyecto desde la idea al paso de producción.",
                  },
              ];
  language_known : any = [
                  {
                    title:"ESTAÑOL",
                    score:"100",
                  },
                  {
                    title:"English",
                    score:"40",
                  }
              ];

  knowledge: any = [
              "Website hosting",
              "iOS y android apps",
              "Back-End",
              "Bot Discord",
              "AWS",
              "Firebase",
              "WORDPRESS",
              // "Create logo design",
              // "Design for print",
              // "Modern and mobile-ready",
              // "Advertising services include",
              // "Graphics and animations",
              // "Search engine marketing",
              ];


  constructor() { }

  ngOnInit(): void {
  }

}
