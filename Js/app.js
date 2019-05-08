var app = new Vue({
    el: "#app",
    data: {
        style: {
            colors: {
                primary: '#d5752d',
                secondary: '#59595b',
                light: 'white',
                dark: 'black'
            }
        },
        resources: [
            {
                name: 'Recurso Uno',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: true
            },
            {
                name: 'Recurso Dos',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Tres',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Cuatro',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Cinco',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Seis',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Siete',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Ocho',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Nueve',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Diez',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Once',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Doce',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            },
            {
                name: 'Recurso Trece',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                link: 'https://celsia.sharepoint.com/sites/intranet/',
                image: 'https://www.celsia.com/portals/0/Images/asamblea-yt.jpg',
                active: false
            }
        ]
    },
    computed: {
        styleMain: {
            get: function () {
                return {
                    color: this.style.colors.primary,
                    backgroundColor: this.style.colors.light
                }
            }
        },
        styleTwo: {
            get: function () {
                return {
                    color: this.style.colors.secondary,
                    backgroundColor: this.style.colors.dark
                }
            }
        }
    }
});