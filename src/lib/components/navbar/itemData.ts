/*
  Este archivo contiene la información de los items que se
  muestran en el menú de la aplicación. Cada item tiene un
  nombre, un icono y un menú al que pertenece. Además, cada
  item puede tener un submenu con otros items.
*/

export const itemData = [
  {
    it: 1, name: "Archivo", icon: "/icons/file.svg", menu: "principal",
    submenu: [ { name: "Nuevo", icon: "/icons/new.svg", menu: "principal"},
      { name: "Abrir", icon: "/icons/open.svg", menu: "principal"},
      { name: "Guardar", icon: "/icons/save.svg", menu: "principal"},
      { name: "Guardar como", icon: "/icons/saveas.svg", menu: "principal"},
      { name: "Cerrar todo", icon: "/icons/close.svg", menu: "principal"},
    ],
  },
  {
    it: 0, name: "Vista previa", icon: "/icons/eye.svg", menu: "principal",
    submenu: [
      { name: "Vista previa maestro", icon: "/icons/preview.svg", menu: "principal"},
      { name: "Vista previa grupo", icon: "/icons/preview.svg", menu: "principal"},
      { name: "Vista previa materia", icon: "/icons/preview.svg", menu: "principal"},
      { name: "Vista previa aula", icon: "/icons/preview.svg", menu: "principal"},
    ],
  },
  {
    it: 0, name: "Imprimir", icon: "/icons/print.svg", menu: "principal",
    submenu: [
      { name: "Horario maestros", icon: "/icons/pdf.svg", menu: "principal"},
      { name: "Horario grupos", icon: "/icons/pdf.svg", menu: "principal"},
      { name: "Horario materias", icon: "/icons/pdf.svg", menu: "principal"},
      { name: "Horario aulas", icon: "/icons/pdf.svg", menu: "principal"},
      { name: "Descargar todo", icon: "/icons/pdf.svg", menu: "principal"},
    ],
  },

  { it: 2, name: "Grupos", icon: "/icons/group.svg", menu: "VistaGrupos", submenu: [] },
  { it: 0, name: "Materias", icon: "/icons/books.svg", menu: "VistaMaterias", submenu: [] },
  { it: 0, name: "Maestros", icon: "/icons/teacher.svg", menu: "VistaMaestros", submenu: [] },
  { it: 0, name: "Aulas", icon: "/icons/door.svg", menu: "VistaAulas", submenu: [] },

  { it: 3, name: "Inteligencia artificial", icon: "/icons/robot.svg", menu: "FormMaterias", submenu: [] },
  { it: 0, name: "Historial", icon: "/icons/clock.svg", menu: "FormAulas", submenu: [] },

  { it: 0, name: "Configuracion", icon: "/icons/school.svg", menu: "FormGrupos", submenu: [] },
];
