export interface ContactEmailData {
  from_name: string;
  subject: string;
  budget: string;
  found_through: string;
  from_email: string;
  message: string;
}

export function generateContactEmailTemplate(data: ContactEmailData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message de contact</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 24px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 30px 20px;
        }
        
        .info-section {
            margin-bottom: 25px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 25px;
        }
        
        .info-item {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            border-left: 4px solid #667eea;
        }
        
        .info-item h3 {
            color: #667eea;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .info-item p {
            font-size: 16px;
            color: #333;
            font-weight: 500;
        }
        
        .message-section {
            background: #f8f9fa;
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid #28a745;
        }
        
        .message-section h3 {
            color: #28a745;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 12px;
            font-weight: 600;
        }
        
        .message-content {
            background: white;
            padding: 15px;
            border-radius: 6px;
            font-size: 15px;
            line-height: 1.6;
            color: #333;
            border: 1px solid #e9ecef;
        }
        
        .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #666;
            font-size: 14px;
        }
        
        .badge {
            display: inline-block;
            background: #e3f2fd;
            color: #1976d2;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #ddd, transparent);
            margin: 20px 0;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 8px;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            
            .header {
                padding: 20px 15px;
            }
            
            .content {
                padding: 20px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>📧 Nouveau Message de Contact</h1>
            <p>Reçu depuis votre site web</p>
        </div>
        
        <div class="content">
            <div class="info-section">
                <div class="info-grid">
                    <div class="info-item">
                        <h3>👤 Nom du contact</h3>
                        <p>${data.from_name}</p>
                    </div>
                    
                    <div class="info-item">
                        <h3>📧 Email</h3>
                        <p>${data.from_email}</p>
                    </div>
                    
                    <div class="info-item">
                        <h3>📋 Sujet</h3>
                        <p>${data.subject}</p>
                    </div>
                    
                    <div class="info-item">
                        <h3>💰 Budget</h3>
                        <p>${data.budget}</p>
                    </div>
                </div>
                
                <div class="info-item" style="margin-bottom: 20px;">
                    <h3>🔍 Comment ils vous ont trouvé</h3>
                    <p>${data.found_through}</p>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="message-section">
                <h3>💬 Message</h3>
                <div class="message-content">
                    ${data.message.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
        
        <div class="footer">
            <div class="badge">Automatique</div>
            <p style="margin-top: 10px;">
                Email envoyé automatiquement depuis votre portfolio • ${new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
            </p>
        </div>
    </div>
</body>
</html>
  `.trim();
}
