// details.js – Content data for every detail screen
const DETAILS = {
  /* ── HERIDAS ── */
  'herida-cortante': {
    title:  'Heridas Cortantes',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Heridas Cortantes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula justo nec lorem dignissim. Las heridas cortantes son producidas por objetos afilados como cuchillos, vidrios o latas.</p>
      <h3>Características</h3>
      <ul>
        <li>Bordes limpios y bien definidos</li>
        <li>Sangrado abundante</li>
        <li>Pueden afectar tejidos profundos</li>
        <li>Riesgo de infección moderado</li>
      </ul>
      <h3>Primeros Auxilios</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Aplica presión directa con una gasa limpia durante al menos 5 minutos.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <h3>Cuándo buscar ayuda</h3>
      <p>Ut labore et dolore magnam aliquam quaerat voluptatem. Si el sangrado no cede en 10 minutos o la herida es profunda, acude a urgencias inmediatamente.</p>
    `
  },
  'herida-punzante': {
    title:  'Heridas Punzantes',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Heridas Punzantes</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Las heridas punzantes son causadas por objetos puntiagudos que penetran la piel, como clavos, agujas o espinas.</p>
      <h3>Características</h3>
      <ul>
        <li>Apertura pequeña pero profunda</li>
        <li>Sangrado externo escaso</li>
        <li>Alto riesgo de infección interna</li>
        <li>Posible daño a órganos internos</li>
      </ul>
      <h3>Primeros Auxilios</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error. No extraigas el objeto si está profundamente incrustado. Inmoviliza el objeto si es posible y acude a urgencias.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verifica el estado de vacunación antitetánica del afectado.</p>
      <h3>Prevención</h3>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Usa calzado adecuado y guantes cuando manipules materiales punzantes.</p>
    `
  },
  'herida-contusa': {
    title:  'Heridas Contusas',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Heridas Contusas</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Producidas por golpes con objetos romos o por caídas, provocando magulladuras y desgarros.</p>
      <h3>Características</h3>
      <ul>
        <li>Bordes irregulares y desgarrados</li>
        <li>Hematomas y moretones</li>
        <li>Hinchazón de la zona afectada</li>
        <li>Dolor intenso al tacto</li>
      </ul>
      <h3>Primeros Auxilios</h3>
      <p>Aplica hielo envuelto en un paño durante 20 minutos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleva la extremidad afectada si es posible.</p>
      <h3>Observación</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error. Si el dolor es muy intenso o sospechas fractura, no muevas al afectado y llama a emergencias.</p>
    `
  },
  'herida-abrasiva': {
    title:  'Heridas Abrasivas',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Heridas Abrasivas</h2>
      <p>Lorem ipsum dolor sit amet. Las heridas abrasivas o rozaduras ocurren cuando la piel se frota con una superficie rugosa, arrancando las capas superficiales.</p>
      <h3>Características</h3>
      <ul>
        <li>Superficie amplia y superficial</li>
        <li>Sangrado escaso en puntitos</li>
        <li>Gran dolor por exposición nerviosa</li>
        <li>Presencia de suciedad o cuerpos extraños</li>
      </ul>
      <h3>Primeros Auxilios</h3>
      <p>Limpia la herida con agua y jabón. Retira suavemente los cuerpos extraños. Aplica antiséptico y cubre con apósito no adherente.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    `
  },
  'herida-superficial': {
    title:  'Heridas Superficiales',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Heridas Superficiales</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Afectan solo a la epidermis y dermis superior, sin comprometer tejidos más profundos.</p>
      <h3>Características</h3>
      <ul>
        <li>Profundidad mínima</li>
        <li>Sangrado leve o nulo</li>
        <li>Cicatrizan rápidamente</li>
        <li>Bajo riesgo de complicaciones</li>
      </ul>
      <h3>Primeros Auxilios</h3>
      <p>Limpia con agua corriente y aplica antiséptico. Cubre con una curita o apósito. Lorem ipsum dolor sit amet.</p>
      <p>Sed ut perspiciatis. Vigila señales de infección: enrojecimiento, calor, pus o fiebre en los días siguientes.</p>
    `
  },
  'herida-profunda': {
    title:  'Heridas Profundas',
    back:   'screen-heridas',
    color:  '#e91e7a',
    content: `
      <h2>Heridas Profundas</h2>
      <p>Lorem ipsum dolor sit amet. Comprometen múltiples capas de tejido, incluyendo músculo, tendones o incluso huesos.</p>
      <h3>Características</h3>
      <ul>
        <li>Sangrado severo y difícil de controlar</li>
        <li>Posible exposición de tejido profundo</li>
        <li>Alto riesgo de infección grave</li>
        <li>Pueden requerir sutura quirúrgica</li>
      </ul>
      <h3>Primeros Auxilios</h3>
      <p>LLAMA al 911 de inmediato. Aplica presión directa con gasa limpia. No retires la gasa aunque se sature; agrega más encima.</p>
      <p>Nemo enim ipsam voluptatem. Mantén al afectado recostado y abrigado para evitar el shock.</p>
    `
  },

  /* ── SIGNOS VITALES ── */
  'presion': {
    title:  'Presión Arterial',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Presión Arterial</h2>
      <p>Lorem ipsum dolor sit amet. La presión arterial es la fuerza que ejerce la sangre contra las paredes de las arterias. Se mide en milímetros de mercurio (mmHg).</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Normal: 120/80 mmHg</li>
        <li>Elevada: 120–129 / menor de 80</li>
        <li>Hipertensión: 130/80 o más</li>
        <li>Hipotensión: menor de 90/60</li>
      </ul>
      <h3>Cómo Medirla</h3>
      <p>Sed ut perspiciatis unde omnis iste natus. Siéntate en reposo 5 minutos antes de medir. Coloca el brazalete a la altura del corazón.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    `
  },
  'pulso': {
    title:  'Pulso',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Pulso</h2>
      <p>Lorem ipsum dolor sit amet. El pulso es la expansión y contracción rítmica de una arteria, resultado de cada latido del corazón.</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Adultos: 60–100 lpm en reposo</li>
        <li>Deportistas: puede ser menor de 60</li>
        <li>Niños: 70–120 lpm</li>
        <li>Recién nacidos: 120–160 lpm</li>
      </ul>
      <h3>Cómo Tomarlo</h3>
      <p>Coloca dos dedos sobre la arteria radial (muñeca) o carótida (cuello). Cuenta los latidos durante 60 segundos o 30 segundos y multiplica por 2.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
    `
  },
  'respiracion': {
    title:  'Respiración',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Respiración</h2>
      <p>Lorem ipsum dolor sit amet. La frecuencia respiratoria es el número de respiraciones completas (inspiración + espiración) por minuto.</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Adultos: 12–20 rpm</li>
        <li>Niños: 20–30 rpm</li>
        <li>Lactantes: 30–60 rpm</li>
        <li>Taquipnea: más de 20 en adultos</li>
      </ul>
      <h3>Evaluación</h3>
      <p>Observa el movimiento del tórax durante 60 segundos. Lorem ipsum dolor sit amet. Una respiración normal es silenciosa y sin esfuerzo.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
    `
  },
  'temperatura': {
    title:  'Temperatura',
    back:   'screen-vitales',
    color:  '#1565c0',
    content: `
      <h2>Temperatura Corporal</h2>
      <p>Lorem ipsum dolor sit amet. La temperatura corporal refleja el equilibrio entre la producción y pérdida de calor del cuerpo.</p>
      <h3>Valores Normales</h3>
      <ul>
        <li>Normal: 36°C – 37.5°C</li>
        <li>Febrícula: 37.5°C – 38°C</li>
        <li>Fiebre: mayor de 38°C</li>
        <li>Hipotermia: menor de 35°C</li>
      </ul>
      <h3>Cómo Medirla</h3>
      <p>Usa termómetro digital axilar (agrega 0.5°C al resultado), oral o timpánico. Sed ut perspiciatis unde omnis iste natus error.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. En fiebre alta, aplica paños húmedos y consulta al médico.</p>
    `
  },

  /* ── PROTOCOLO ── */
  'proteger': {
    title:  'Proteger',
    back:   'screen-protocolo',
    color:  '#2e7d32',
    content: `
      <h2>Paso 1: Proteger</h2>
      <p>Lorem ipsum dolor sit amet. Antes de actuar, asegúrate de que tanto el lugar del accidente como tú mismo estén seguros.</p>
      <h3>Evalúa el Entorno</h3>
      <ul>
        <li>Señaliza el área de peligro</li>
        <li>Apaga motores de vehículos implicados</li>
        <li>Aleja a espectadores del peligro</li>
        <li>Usa guantes y protección personal</li>
      </ul>
      <h3>Principios Clave</h3>
      <p>Sed ut perspiciatis. Tu seguridad es primero. Un socorrista herido solo agrava la situación. Evalúa antes de actuar.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
    `
  },
  'alertar': {
    title:  'Alertar',
    back:   'screen-protocolo',
    color:  '#2e7d32',
    content: `
      <h2>Paso 2: Alertar</h2>
      <p>Lorem ipsum dolor sit amet. Activa los servicios de emergencia lo antes posible. Cada segundo cuenta en una emergencia.</p>
      <h3>Cómo Alertar</h3>
      <ul>
        <li>Llama al 911 (o número local)</li>
        <li>Indica la ubicación exacta</li>
        <li>Describe lo ocurrido brevemente</li>
        <li>Menciona el número de heridos</li>
        <li>No cuelgues hasta que te lo indiquen</li>
      </ul>
      <h3>Información que debes dar</h3>
      <p>Sed ut perspiciatis unde omnis iste natus. Indica si hay peligros activos: fuego, gases, tráfico. Sigue las instrucciones del operador.</p>
    `
  },
  'socorrer': {
    title:  'Socorrer',
    back:   'screen-protocolo',
    color:  '#2e7d32',
    content: `
      <h2>Paso 3: Socorrer</h2>
      <p>Lorem ipsum dolor sit amet. Una vez seguro el entorno y alertados los servicios, presta primeros auxilios básicos sin mover innecesariamente al herido.</p>
      <h3>Prioridades</h3>
      <ul>
        <li>Verifica consciencia y respiración</li>
        <li>Controla hemorragias graves</li>
        <li>Coloca en posición lateral si inconsciente</li>
        <li>Inicia RCP si no hay pulso</li>
        <li>Mantén al herido abrigado y tranquilo</li>
      </ul>
      <h3>Actitud del Socorrista</h3>
      <p>Sed ut perspiciatis. Mantén la calma, habla al herido constantemente y no dejes de vigilar sus constantes vitales hasta que lleguen los servicios.</p>
    `
  },

  /* ── BOTIQUÍN ── */
  'curacion': {
    title:  'Material de Curación',
    back:   'screen-botiquin',
    color:  '#e65100',
    content: `
      <h2>Material de Curación</h2>
      <p>Lorem ipsum dolor sit amet. El material de curación es indispensable para tratar heridas y lesiones en el lugar del accidente.</p>
      <h3>Elementos Básicos</h3>
      <ul>
        <li>Gasas estériles (varios tamaños)</li>
        <li>Apósitos adhesivos (curitas)</li>
        <li>Vendas elásticas y de gasa</li>
        <li>Esparadrapo / cinta adhesiva médica</li>
        <li>Algodón hidrófilo</li>
        <li>Tijeras de punta roma</li>
        <li>Pinzas estériles</li>
      </ul>
      <h3>Mantenimiento</h3>
      <p>Sed ut perspiciatis. Revisa las fechas de caducidad regularmente. Repón los materiales usados inmediatamente. Almacena en lugar fresco y seco.</p>
    `
  },
  'limpieza': {
    title:  'Material de Limpieza y Desinfección',
    back:   'screen-botiquin',
    color:  '#e65100',
    content: `
      <h2>Limpieza y Desinfección</h2>
      <p>Lorem ipsum dolor sit amet. La correcta desinfección de heridas previene infecciones que pueden complicar seriamente la recuperación.</p>
      <h3>Elementos Básicos</h3>
      <ul>
        <li>Agua oxigenada (H₂O₂ 3%)</li>
        <li>Povidona yodada (Betadine)</li>
        <li>Suero fisiológico para irrigar</li>
        <li>Alcohol isopropílico 70%</li>
        <li>Jabón antiséptico líquido</li>
        <li>Guantes desechables (varios pares)</li>
      </ul>
      <h3>Uso Correcto</h3>
      <p>Sed ut perspiciatis unde omnis iste natus. Limpia siempre de adentro hacia afuera. Nunca uses alcohol en heridas abiertas profundas.</p>
    `
  },
  'gestion': {
    title:  'Material de Gestión y Emergencias',
    back:   'screen-botiquin',
    color:  '#e65100',
    content: `
      <h2>Material de Gestión y Emergencias</h2>
      <p>Lorem ipsum dolor sit amet. Elementos adicionales que permiten actuar con mayor eficacia ante situaciones críticas.</p>
      <h3>Elementos Básicos</h3>
      <ul>
        <li>Torniquete o banda hemostática</li>
        <li>Manta térmica de emergencia</li>
        <li>Mascarilla de RCP de bolsillo</li>
        <li>Inmovilizadores / férulas</li>
        <li>Termómetro digital</li>
        <li>Linterna con pilas de repuesto</li>
        <li>Lista de medicamentos y alergias del paciente</li>
      </ul>
      <h3>Organización</h3>
      <p>Sed ut perspiciatis. Clasifica el material por categorías y revísalo cada 6 meses. Todos en casa deben saber dónde está el botiquín.</p>
    `
  },
};
