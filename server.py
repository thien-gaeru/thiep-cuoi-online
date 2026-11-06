import http.server
import socketserver
import json
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class WeddingRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/save-config':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                config_json = json.loads(post_data.decode('utf-8'))
                # Lưu file config.json
                config_path = os.path.join(DIRECTORY, 'config.json')
                with open(config_path, 'w', encoding='utf-8') as f:
                    json.dump(config_json, f, ensure_ascii=False, indent=2)
                
                # Tự động cập nhật thiep-cuoi.html
                self.rebuild_static_html(config_json)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({'success': True, 'message': 'Đã lưu cấu hình lên máy chủ!'}).encode('utf-8'))
                return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'success': False, 'error': str(e)}).encode('utf-8'))
                return
        
        self.send_error(404, "Endpoint not found")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def rebuild_static_html(self, config):
        try:
            index_path = os.path.join(DIRECTORY, 'index.html')
            css_path = os.path.join(DIRECTORY, 'style.css')
            js_path = os.path.join(DIRECTORY, 'script.js')
            templates_path = os.path.join(DIRECTORY, 'templates.js')
            output_path = os.path.join(DIRECTORY, 'thiep-cuoi.html')

            with open(index_path, 'r', encoding='utf-8') as f:
                html = f.read()
            with open(css_path, 'r', encoding='utf-8') as f:
                css = f.read()
            with open(js_path, 'r', encoding='utf-8') as f:
                js = f.read()
            with open(templates_path, 'r', encoding='utf-8') as f:
                templates_js = f.read()

            # Pre-bake config
            baked = f"const DEFAULT_CONFIG = {json.dumps(config, ensure_ascii=False, indent=2)};"
            import re
            js = re.sub(r'const DEFAULT_CONFIG = \{[\s\S]*?\n\};\n', baked + '\n', js)

            html = html.replace('<link rel="stylesheet" href="style.css">', f'<style>\n{css}\n</style>')
            html = html.replace('<script src="templates.js"></script>', f'<script>\n{templates_js}\n</script>')
            html = html.replace('<script src="script.js"></script>', f'<script>\n{js}\n</script>')

            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(html)
            print("Đã tự động cập nhật thiep-cuoi.html với cấu hình mới.")
        except Exception as err:
            print("Lỗi rebuild static html:", err)

if __name__ == '__main__':
    # Cho phép tái sử dụng port ngay lập tức
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), WeddingRequestHandler) as httpd:
        print(f"Máy chủ thiệp cưới đang chạy trên cổng {PORT} (0.0.0.0:{PORT})...")
        sys.stdout.flush()
        httpd.serve_forever()
