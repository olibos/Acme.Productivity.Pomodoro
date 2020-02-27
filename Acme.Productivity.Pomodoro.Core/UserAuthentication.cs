// <copyright file="UserAuthentication.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Core
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.Linq;
    using System.Runtime.Serialization;

    /// <summary>
    /// Represent an authenticated user.
    /// </summary>
    [DataContract]
    public class UserAuthentication
    {
        /// <summary>
        /// Gets or sets the Password.
        /// </summary>
        [Required]
        [MaxLength(8000)]
        [DataMember(Name = "password")]
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets the UserName.
        /// </summary>
        /// <value>The UserName.</value>
        [DataMember(Name = "userName")]
        [Required]
        [MaxLength(8000)]
        public string UserName { get; set; }
    }
}