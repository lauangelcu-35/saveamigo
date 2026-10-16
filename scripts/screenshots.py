from playwright.sync_api import sync_playwright
B='http://localhost:4321'
def quiz(pg, path, answers):
    pg.goto(B+path, wait_until='networkidle')
    for n,v in answers:
        pg.check(f'input[name="{n}"][value="{v}"]'); pg.wait_for_timeout(350)
    if pg.is_visible('#qnext'): pg.click('#qnext')
    pg.wait_for_selector('#qres:not([hidden])'); pg.evaluate('window.scrollTo(0,0)'); pg.wait_for_timeout(400)
A=[('fondo','2'),('deuda','no'),('plazo','3'),('ingresos','1'),('perdida','1'),('objetivo','2'),('saber','0')]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1280,'height':800})
    for path,name in [('/','home'),('/comparar/cuentas/','comparar-cuentas'),('/comparar/letras/','comparar-letras'),('/empieza-aqui/','empieza-aqui'),('/quiz/','quiz-start'),('/mx/','mx-home'),('/mx/comparar/cuentas/','mx-comparar-cuentas'),('/mx/comparar/cetes/','mx-comparar-cetes'),('/mx/aprende/','mx-aprende')]:
        pg.goto(B+path,wait_until='networkidle'); pg.screenshot(path=f'screenshots/{name}.png',full_page=True)
    quiz(pg,'/quiz/',A); pg.screenshot(path='screenshots/quiz-result-email.png',full_page=True)
    quiz(pg,'/mx/quiz/',A); pg.screenshot(path='screenshots/mx-quiz-result-email.png',full_page=True)
    for path,name in [('/us/','us-home'),('/uk/','uk-home'),('/nomads/','nomads-home'),('/us/compare/tbills/','us-compare-tbills'),('/uk/compare/savings/','uk-compare-savings')]:
        pg.goto(B+path,wait_until='networkidle'); pg.screenshot(path=f'screenshots/{name}.png',full_page=True)
    quiz(pg,'/uk/quiz/',A); pg.screenshot(path='screenshots/uk-quiz-result-email.png',full_page=True)
    m=b.new_page(viewport={'width':390,'height':844},device_scale_factor=2)
    for path,name in [('/','home-mobile-390'),('/comparar/cuentas/','comparar-cuentas-mobile-390'),('/quiz/','quiz-start-mobile-390'),('/mx/','mx-home-mobile-390')]:
        m.goto(B+path,wait_until='networkidle'); m.screenshot(path=f'screenshots/{name}.png',full_page=True)
    quiz(m,'/mx/quiz/',A); m.screenshot(path='screenshots/mx-quiz-result-mobile-390.png',full_page=True)
    b.close()
