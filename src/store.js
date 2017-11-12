const store = {
  state: {
    name: 'Caio Fernandes',
    position: 'Desenvolvedor FullStack',
    description: `Olá! Sou Caio Fernandes, de São Paulo - SP. Sou desenvolvedor web há cerca de 4 anos e 
    minhas habilidades vão desde o pixel perfect até a arquitetura de um projeto web.<br>
    Atualmente estou me aprofundando sobre padrões de projeto em Javascript, arquitetura de microserviços com Docker e RabbitMQ, 
    React Native e bancos de dados NoSQL como MongoDB e ArangoDB
    .<br>`,
    birth: '23/08/1993',
    address: 'São Paulo, SP',
    phone: '(11) 96647-8870',
    email: 'caio_fsouza@hotmail.com',
    experiences: [
      {
        position: 'Engenheiro de Software',
        company: 'Icolabora',
        duration: '07/2017 - Atual',
        description: `Líder da Chapter de Front-end (Cultura de engenharia do Spotify), 
        responsável por definir técnicas e 
        métodos para criar padrões Javascript na empresa 
        e auxiliar na redução de débitos técnicos. <br>
        - Pesquisa e desenvolvimentos de novos frameworks e 
        tecnologias para melhorar a stack atual, como Node.js frameworks e bibliotecas, 
        testes de stress com Python, Javascript (ES2015, ES2016), Single Page Applications (Vue.js e React), 
        REST Apis com Express, comunicações realtime com OrientDB, RethinkDB e Socket.io.<br>
        - Participação na criação de microserviços internos com Docker, RabbitMQ, MongoDB e Node.js.<br>
        - Participação e estruturação em projeto de chat com Node.js, MongoDB, HTML, CSS e Javascript.<br>
        - Desenvolvimento de dashboards analíticos utilizando Elasticsearch, MySQL e Rythm(Template Engine).<br>
        `,
        skills: ['Javascript', 'CSS', 'HTML', 'Vue.js', 'jQuery', 'MongoDB', 'NodeJS', 'MySQL', 'Docker', 'RabbitMQ', 'ElasticSearch', 'Ruby', 'TitanGraph', 'Nginx', 'Java']
      },
      {
        position: 'Desenvolvedor Fullstack Sênior',
        company: 'Icolabora',
        duration: '02/2016 - 07/2017',
        description: `Implantação de projetos sob a plataforma Turbina BPMS.<br>
        Criação de sistema de Service Desk interno para atendimento a clientes do Turbina BPMS.<br>
        Criação de plug-in (em Python) para editor de texto (Sublime-Text 3) para melhor desempenho e produtividade dos times.<br>
        `,
        skills: ['Java', 'Javascript', 'CSS', 'HTML', 'jQuery', 'Activiti', 'MySQL', 'ElasticSearch', 'Ruby', 'TitanGraph', 'Nginx']
      },
      {
        position: 'Desenvolvedor Fullstack Pleno',
        company: 'Steal The Look Portal de Moda',
        duration: '06/2015 - 11/2015',
        description: `Desenvolvimento de sistema em PHP de cadastro de usuários.<br>
        Alterações no site principal, desenvolvido em Wordpress.<br>
        Correções de layout e instalação de plugins no Wordpress.`,
        skills: ['HTML', 'CSS', 'Javascript', 'PHP', 'Wordpress', 'Email Marketing', 'Google Analytics']
      },
      {
        position: 'Desenvolvedor Front-end Pleno',
        company: 'Ideia de Web',
        duration: '08/2014 - 05/2015',
        description: `Criação de sites institucionais, blogs (com Wordpress) e sistemas web.<br> 
        Criação de plataforma de e-commerce própria utilizando PHP (CodeIgniter), MySQL, HTML, CSS, JavaScript, jQuery, Bootstrap e Git.<br>
        Implantação de projetos da plataforma Vtex de e-commerce em clientes do ramo de dentais.`,
        skills: ['HTML', 'CSS', 'Javascript', 'jQuery', 'PHP', 'CodeIgniter', 'Wordpress', 'VTEX', 'Bootstrap']
      }
    ],
    skills: {
      HTML: 10,
      CSS: 8,
      Javascript: 9,
      'Vue.js': 7,
      Webpack: 6,
      NodeJS: 7,
      Python: 5,
      Java: 3,
      MongoDB: 6,
      MySQL: 7,
      Elasticsearch: 6,
      OrientDB: 4,
      Docker: 4,
      Scrum: 7,
      Inglês: 7
    },
    anotherSkills: [
      'Git, GitHub e Git flow',
      'Programação Orientado a Objetos',
      'Babel.js e Ecmascript 6, 7 e 8',
      'Javascript modular',
      'API Rest com Express',
      'Javascript Standard Style com ESLint',
      'Testes de aceitação com Cucumber (Ruby)',
      'Arquitetura de software'
    ],
    education: [
      {
        school: 'FATEC Zona Leste',
        course: 'Análise e Desenvolvimento de Sistemas',
        startEnd: '2013 - Atual (incompleto)'
      }
    ]
  }
}

export default store
