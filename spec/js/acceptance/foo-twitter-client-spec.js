describe('twitter client', function() {
  var zombie = require('zombie')
  var browser = new zombie.Browser()

  describe('initial', function() {
    it('has correct title', function() {
      browser.visit('http://localhost:8003/', function(error, browser) {
        expect(browser.text('title')).toEqual('Foo Twitter Client')
        asyncSpecDone()
      })
      asyncSpecWait()
    })

    it('shows latest trends', function() {
      browser.visit('http://localhost:8003/', function(error, browser) {
        expect(browser.querySelectorAll('.trends .trend').length).toEqual(10)
        asyncSpecDone()
      })
      asyncSpecWait()
    })
  })
})
