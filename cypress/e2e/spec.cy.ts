describe('Home page', () => {
  it('Visits home page', () => {
   
    cy.intercept("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/stationnement-sur-voie-publique-emprises/records?select=plarel%2C%20numvoie%2C%20typevoie%2C%20nomvoie%2C%20zoneres&limit=8&refine=regpri%3A%22GRATUIT%22&refine=regpri%3A%22LOCATION%22&refine=regpar%3A%22V%C3%A9hicule%20partag%C3%A9%22&refine=regpar%3A%22V%C3%A9hicules%20%C3%A9lectriques%20partag%C3%A9s%22", (req) => {
      req.reply({
        "total_count": 12,
        "results": [
          {
            "plarel": 6,
            "numvoie": 25,
            "typevoie": "RUE",
            "nomvoie": "GEOFFROY-SAINT-HILAIRE",
            "zoneres": "5F"
          },
          {
            "plarel": 1,
            "numvoie": 7,
            "typevoie": "BD D'",
            "nomvoie": "ALGERIE",
            "zoneres": "19P"
          },
        ]
      })
    })
    cy.visit('/')
    cy.contains('Liste des stations')
    cy.contains('Plateforme de réservation de vehicule')
    cy.contains('Liste des véhicules')
    cy.contains('Sélectionnez une station')
    cy.contains('25 RUE GEOFFROY-SAINT-HILAIRE')
    cy.contains('7 BD D\' ALGERIE')
  })
})
