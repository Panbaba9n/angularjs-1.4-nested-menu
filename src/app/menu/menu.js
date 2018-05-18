// import angular from 'angular';
import ngAnimate from 'angular-animate';

let menuData = [
    {
        title: "Root Level",
        nodes: [
            {
                title: "Single 2",
                nodes: []
            },
            {
                title: "Nested 2",
                nodes: [
                    {
                        title: "Single 3",
                        nodes: []
                    },
                    {
                        title: "Nested 3",
                        nodes: [
                            {
                                title: "Nested 4",
                                nodes: [
                                    {
                                        title: "Single 5",
                                        nodes: []
                                    },
                                    {
                                        title: "Single 5",
                                        nodes: []
                                    },
                                    {
                                        title: "Single 5",
                                        nodes: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Root 2 Level",
        nodes: []
    }
];

let menu = () => {
    return {
        template: require('./menu.html'),
        controller: MenuCtrl,
        controllerAs: 'menu'
    }
};

class MenuCtrl {
    constructor() {
        this.data = menuData;
    }

    clicked(node) {
        node.open = !node.open;
        console.log(node.title);
    }
}


const MODULE_NAME = 'menu';

angular.module(MODULE_NAME, [ngAnimate])
    .directive('menu', menu);

export default MODULE_NAME;