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

    it('has trends link', function() {
      browser.visit('http://localhost:8003/', function(error, browser) {
        expect(browser.text('.actions .showTrends')).toEqual('Trends')
        asyncSpecDone()
      })
      asyncSpecWait()
    })
  })

  describe('when toggling trends link', function() {
    it('shows and hides latest trends', function() {
      expect(browser.querySelectorAll('.trends .trend').length).toEqual(0)
      browser.visit('http://localhost:8003/', function(error, browser) {
        browser.clickLink('.showTrends', function(error, browser) {
          expect(browser.querySelectorAll('.trends .trend').length).toEqual(10)
          browser.clickLink('.showTrends', function(error, browser) {
            expect(browser.querySelectorAll('.trends .trend').length).toEqual(0)
            asyncSpecDone()
          })
        })
      })
      asyncSpecWait()
    })
  })
})
