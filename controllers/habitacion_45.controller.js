let habitaciones = [];
let currentId = 1;

exports.index = (req, res) => {
  res.render('index_45', { habitaciones });
};

exports.create = (req, res) => {
  res.render('create_45');
};

exports.store = (req, res) => {
  const nuevaHabitacion = {
    id: currentId++,
    noHabitacion: req.body.noHabitacion
  };
  habitaciones.push(nuevaHabitacion);
  res.redirect('/habitaciones');
};

exports.show = (req, res) => {
  const habitacion = habitaciones.find(h => h.id === parseInt(req.params.id));
  res.render('show_45', { habitacion });
};